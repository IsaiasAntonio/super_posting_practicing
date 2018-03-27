module V1
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :find_user, only: %i{show update destroy}
    wrap_parameters include: User.attribute_names + %i[password]

    def signup
      @user = User.new
      save_user
    end

    def show; end

    def signin
      @user = User.signin(user_credentials)
      if @user
        render 'show'
      end
    end


    def destroy
      session[:user_id] = nil
      render 'posts'
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email)
    end

    def user_credentials
      params.permit(:email, :password)
    end

    def save_user
      @user.assign_attributes(user_params)
      if @user.save
        render 'show'
      else
        render(json: @user.errors, status: 400)
      end
    end

    def find_user
      @user = User.find(params[:id])
    end
  end
end
