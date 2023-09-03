class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :speciality, :description, :consultation_fees, :years_of_experience, :image
  # has_one_attached :image
end
