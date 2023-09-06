class Api::V1::DoctorsController < ApplicationController
  def index
    @doctors = Doctor.all
    if @doctors
      render json: @doctors.with_attached_image
    else
      render json: @doctors.errors.full_messages
    end
  end

  def new
    @doctor = Doctor.new
  end

  def show
    @doctor = Doctor.find(params[:id])
    if @doctor
      render json: @doctor
    else
      render json: @doctor.errors.full_messages
    end
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor, status: :created,
             serializer: DoctorSerializer
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])
    if @doctor.destroy
      render json: { message: 'Doctor deleted' }
    else
      render json: @doctor.errors.full_messages
    end
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :description, :consultation_fees, :years_of_experience, :image)
  end
end
