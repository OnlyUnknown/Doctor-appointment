class Appointement < ApplicationRecord
  belongs_to :doctor
  belongs_to :user

  validates :doctor_id, :user_id, :date, :time, presence: true
end
