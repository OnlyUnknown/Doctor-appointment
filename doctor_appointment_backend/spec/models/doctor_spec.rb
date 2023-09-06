require 'rails_helper'

RSpec.describe Doctor, type: :model do
  doctor = Doctor.new(name: 'John', speciality: 'Dentist', description: 'Dentist', consultation_fees: 500,
                      years_of_experience: 5)

  it 'check there is a name' do
    expect(doctor).to be_valid
    expect(doctor.name).to eql 'John'
  end

  it 'check there is a speciality' do
    expect(doctor.speciality).to_not eql ''
    expect(doctor.speciality).to eql 'Dentist'
  end

  it 'check there is a description' do
    expect(doctor.description).to_not eql ''
    expect(doctor.description).to eql 'Dentist'
  end

  it 'check there is a consultation_fees' do
    expect(doctor.consultation_fees).to_not eql ''
    expect(doctor.consultation_fees).to eql 500.0
  end

  it 'check there is a years_of_experience' do
    expect(doctor.years_of_experience).to_not eql ''
    expect(doctor.years_of_experience).to eql 5
  end
end
