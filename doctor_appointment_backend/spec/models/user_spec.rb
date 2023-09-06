require 'rails_helper'

RSpec.describe User, type: :model do
  user = User.new(name: 'John', email: 'john@gmail.com', password: '123456', password_confirmation: '123456')

  it 'check there is a name' do
    expect(user).to be_valid
    expect(user.name).to eql 'John'
    expect(user.name).to_not eql ''
  end

  it 'check there is an email' do
    expect(user.email).to_not eql ''
    expect(user.email).to eql 'john@gmail.com'
  end
  it 'check there is a password' do
    expect(user.password).to_not eql ''
    expect(user.password).to eql '123456'
  end
end
