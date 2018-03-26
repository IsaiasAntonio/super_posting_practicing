class UsersController < ApplicationController

  def index
    @user = User.new
  end

  def create
    @user = User.new(user_params)
  end

  def show
  end

  def destroy
    @user.destroy
  end

  def update
    render 'show' if @user.update(user_params)
  end

  private 
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
