Rails.application.routes.draw do
  resources :posts

  namespace :v1 do
    resources :posts
  end

  get '*/posts', to: 'post#index'
end
