Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[index create destroy show]
      resources :doctors, only: %i[index new create]
      resources :doctors_users, only: %i[index show create update destroy]
    end
  end
  devise_for :users
end
