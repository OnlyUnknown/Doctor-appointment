# frozen_string_literal: true

class DoctorShowSerialiser < ActiveModel::Serializer
  attributes :id, :name, :speciality, :description, :experience, :fees, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
