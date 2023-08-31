Rails.application.routes.draw do
  resources :appointements
  resources :doctors, only: [:index, :show, :create, :update, :destroy]
  resources :users
end
