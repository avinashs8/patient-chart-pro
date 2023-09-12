Rails.application.routes.draw do
  
  # resources :pharmacies
  # resources :prescriptions
  # resources :patients
  # resources :users
  post '/signup', to: "users#create"

  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
