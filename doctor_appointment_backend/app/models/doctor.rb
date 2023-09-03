class Doctor < ApplicationRecord
  # before_validation :set_default

  validates :name, :speciality, :description, :consultation_fees, :years_of_experience, presence: true
  has_one_attached :image
  has_many :doctors_users
  after_commit :add_default_image, on: %i[create]

  private

  def add_default_image
    return if image.attached?

    image.attach(
      io: File.open(
        Rails.root.join(
          'app', 'assets', 'images', 'default_image.png'
        )
      ),
      filename: 'default_image.png',
      content_type: 'image/png'
    )
  end
end
