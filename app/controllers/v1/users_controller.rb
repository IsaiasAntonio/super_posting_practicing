module V1
  class UsersController < ApplicationController
    before_action :find_user, only: %i{show update destroy}

    def index
      @user = User.new
    end

    def create
      @user = User.new(user_params)
      save_user
      session[:user_id] = @user.id
    end

    def show; end

    def signin; end

    def destroy
      session[:user_id] = nil
    end

    def update
      render 'show' if @user.update(user_params)
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
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
