class Api::V1::DoctorsUsersController < ApplicationController
  def index
    doctors_users = DoctorsUser.all
    render json: doctors_users
  end

  def show
    doctors_user = DoctorsUser.find(params[:id])
    render json: doctors_user
  end

  def create
    doctors_user = DoctorsUser.new(doctors_user_params)
    if doctors_user.save
      render json: doctors_user, status: :created
    else
      render json: { errors: doctors_user.errors }, status: :unprocessable_entity
    end
  end

  def update
    doctors_user = DoctorsUser.find(params[:id])
    if doctors_user.update(doctors_user_params)
      render json: doctors_user
    else
      render json: { errors: doctors_user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    doctors_user = DoctorsUser.find(params[:id])
    doctors_user.destroy
    head :no_content
  end

  private

  def doctors_user_params
    params.require(:doctors_user).permit(:user_id, :doctor_id, :city, :appontment_date)
  end
end
