Rails.application.routes.draw do
  resources :users, only: [:show, :create, :update]
  resources :performances, only: [:index, :show, :create]
end
