Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :tracks, only: [:create]
    end
    resources :tracks, only: [:show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
