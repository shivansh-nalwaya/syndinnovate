Rails.application.routes.draw do
  post "authenticate", to: "authentication#authenticate"
  resources :categories
  resources :form_configs
end
