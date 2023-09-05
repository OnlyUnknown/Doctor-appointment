class DoctorSerializer < ActiveModel::Serializer
  attributes :id, :name, :speciality, :description, :consultation_fees, :years_of_experience, :image
  include Rails.application.routes.url_helpers

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end
end
