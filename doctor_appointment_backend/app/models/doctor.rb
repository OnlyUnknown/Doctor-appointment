class Doctor < ApplicationRecord
  before_validation :set_default

  validates :name, presence: true
  validates :speciality, presence: true
  validates :description, presence: true
  validates :consultation_fees, presence: true
  validates :years_of_experience, presence: true
  has_one_attached :image
  has_many :doctors_users

  private

  def set_default
    '../assets/images/doctor-placeholder-1.png' if image.blank?
  end
end
