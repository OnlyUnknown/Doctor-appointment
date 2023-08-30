class DoctorsController < ApplicationController
  def index
    @doctors = Doctor.all
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
    render json: @doctors
  end

  def new
    @doctor = Doctor.new
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor, status: :created
    else
      render json: @doctor.errors, status: :unprocessable_entity
    end
  end

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality, :description, :consultation_fees, :years_of_experience, :image)
  end
end
