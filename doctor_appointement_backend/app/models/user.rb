class User < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments
  has_secure_password

  validates :name,
            uniqueness: { case_sensitive: false },
            presence: true, length: { minimum: 3 }
end
