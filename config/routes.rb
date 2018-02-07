Rails.application.routes.draw do



  namespace :api do
    get 'likes/create'
  end

  namespace :api do
    get 'likes/destroy'
  end

  root to: "static_pages#root"

  namespace :api, {defaults: {format: :json}} do
    resources :users, only: [:create, :index]
    resources :users, only: :show, param: :username
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :index, :show, :update, :destroy]
    resources :likes, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
