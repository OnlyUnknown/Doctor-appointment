class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show destroy]

  def index
    @users = User.all.order(created_at: :desc)
    if @users
      render json: @users
    else
      render json: @users.errors.full_messages
    end
  end

  def create
    @user = User.create!(user_params)
    if @user
      render json: @user, status: :created
    else
      render json: @user.errors.full_messages
    end
  end

  def show
    render json: @user
  end

  def destroy
    if @user&.destroy
      render json: { message: 'User deleted!' }
    else
      render json: { error: 'User not found' }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
