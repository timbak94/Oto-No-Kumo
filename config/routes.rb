Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:create]
    end
    resources :tracks, only: [:index, :show, :update, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:index, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
