Rails.application.routes.draw do


  root to: "static_pages#root"

  namespace :api, {default: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :index, :show, :update, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
