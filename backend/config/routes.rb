Rails.application.routes.draw do
  resources :users, only: [:show, :create, :update] do
    member do
      get 'performances'
    end
  end
  resources :performances, only: [:index, :show, :create]
end
