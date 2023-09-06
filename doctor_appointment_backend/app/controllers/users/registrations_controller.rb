class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create
    build_resource(sign_up_params)
    if resource.save
      render json: { resource: { id: resource.id, name: resource.name, email: resource.email } }
    else
      render json: { errors: resource.errors }, status: :unprocessable_entity
    end
  end

  private

  def sign_up_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
