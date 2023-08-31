class Doctor < ApplicationRecord
  has_many :appointments
  has_many :users, through: :appointments
  has_one_attached :image

  validates :name, :speciality, :experience, :fees, :image, presence: true
  validates :name, length: { minimum: 3 }
end
