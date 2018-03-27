Rails.application.routes.draw do
  resources :posts

  namespace :v1 do
    resources :posts
    post '/signup', to: 'users#signup'
    post '/signin', to: 'users#signin'
  end

  get '/*path', to: 'posts#index'
end
