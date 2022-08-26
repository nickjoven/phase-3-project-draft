Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  post '/login_attempt', to: 'users#login'
  resources :users
  resources :sequences
  resources :follows


  
end
