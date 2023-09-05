class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show destroy]

  def index
    @users = User.all.order(created_at: :desc)
    render json: @users
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
    @user&.destroy
    render json: { message: 'User deleted!' }
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
