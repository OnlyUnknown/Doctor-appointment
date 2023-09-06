require 'rails_helper'

RSpec.describe DoctorsUser, type: :model do
  user = User.new(name: 'John', email: 'john@gmail.com', password: '123456', password_confirmation: '123456')
  doctor = Doctor.new(name: 'John', speciality: 'Dentist', description: 'Dentist', consultation_fees: 500,
                      years_of_experience: 5)
  doctors_user = DoctorsUser.new(user_id: user.id, doctor_id: doctor.id, city: 'NY', appontment_date: '2021-05-05')

  it 'check there is a user_id' do
    expect(doctors_user.user_id).to eql user.id
  end

  it 'check there is a doctor_id' do
    expect(doctors_user.doctor_id).to_not eql ''
    expect(doctors_user.doctor_id).to eql doctor.id
  end

  it 'check there is a city' do
    expect(doctors_user.city).to_not eql ''
    expect(doctors_user.city).to eql 'NY'
  end

  it 'check there is a appointment date' do
    expect(doctors_user.appontment_date).to_not eql ''
  end
end
