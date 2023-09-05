class Api::V1::DoctorsController < ApplicationController
  def index
    @doctors = Doctor.all
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    render json: @doctors.with_attached_image
  end

  def new
    @doctor = Doctor.new
  end

  def show
    @doctor = Doctor.find(params[:id])
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    render json: @doctor
  end

  def create
    request.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001/api/v1/doctors'
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
    @doctor.destroy
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    render json: { message: 'Doctor deleted' }
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :description, :consultation_fees, :years_of_experience, :image)
  end
end
