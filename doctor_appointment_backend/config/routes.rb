Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :doctors, only: %i[index new create]
  namespace :api do
    namespace :v1 do
      resources :doctors_users, only: %i[index show create update destroy]
    end
  end
end
