Rails.application.routes.draw do
  post 'likes/toggle'
  post 'likes/is_liked'

  resources :users, only: [:show, :create, :update] do
    member do
      get 'performances'
    end
  end
  resources :performances, only: [:index, :show, :create, :destroy]
end
