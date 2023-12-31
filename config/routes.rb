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
  post '/addprescription', to: "prescriptions#create"
  patch '/patients/:id', to: "patients#update"
  post '/addpharmacy', to: "pharmacies#create"
  patch '/prescription/:id', to: "prescriptions#update"
  delete '/prescriptions/:id', to: "prescriptions#destroy"
  get '/patients', to: "patients#index"
  

  post '/new_prescription_email', to: 'patient_mailer#new_prescription_email'
  post '/update_prescription_email', to: 'patient_mailer#update_prescription_email'
  post '/delete_prescription_email', to: 'patient_mailer#delete_prescription_email'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
