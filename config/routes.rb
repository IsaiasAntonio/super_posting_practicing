Rails.application.routes.draw do
  resources :posts

  namespace :v1 do
    resources :posts
  end
end
