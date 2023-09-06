class Api::V1::DoctorsUsersController < ApplicationController
  def index
    doctors_users = DoctorsUser.all
    if doctors_users
      render json: doctors_users
    else
      render json: doctors_users.errors.full_messages
    end
  end

  def show
    user_id_to_include = params[:id]
    doctor_users = DoctorsUser.includes(:user, :doctor).where(user_id: user_id_to_include)
    if doctor_users
      render json: doctor_users, include: {
        doctor: { only: :name }
      }, methods: %i[city appontment_date]
    else
      render json: doctor_users.errors.full_messages
    end
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
    if doctors_user.destroy
      head :no_content
    else
      render json: { error: 'DoctorsUser not found' }, status: :not_found
    end
  end

  private

  def doctors_user_params
    params.permit(:user_id, :doctor_id, :city, :appontment_date)
  end
end
