class DoctorsController < ApplicationController

  def index
    doctors = Doctor.all
    render json: doctors, serializer: DoctorShowSerializer
  end

  def show
    doctor = Doctor.find(params[:id])
    render json: doctor, serializer: DoctorShowSerializer
  end

  def create
    request.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    doctor = Doctor.new(doctor_params)
    if doctor.save
      render json: { message: 'Doctor created successfully' }, status: :created
    else
      render json: { errors: "#{doctor.errors.full_messages}Failed to create doctor" }, status: :unprocessible_entity
    end
  end

  def update
    doctor = Doctor.find(params[:id])
    doctor.update(doctor_params)
    render json: doctor
  end

  def destroy
    doctor = Doctor.find(params[:id])
    doctor.destroy
    render json: doctor
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :experience, :fees, :description, :image)
  end
end
