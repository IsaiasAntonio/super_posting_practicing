Rails.application.routes.draw do
  resources :posts

  namespace :v1 do
    resources :posts
    post '/signup', to: 'users#create'
    post '/signin', to: 'users#signin'
  end

  get '/*path', to: 'posts#index'
end
