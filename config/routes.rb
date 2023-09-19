Rails.application.routes.draw do
  
  # resources :pharmacies
  # resources :prescriptions
  # resources :patients
  # resources :users
  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  get '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/patients', to: "patients#index"
  post '/addpatient', to: "patients#create"
  get '/pharmacies', to: "pharmacies#index"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
