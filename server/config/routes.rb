Rails.application.routes.draw do
  post 'auth/:provider/verify', to: 'auth#verify'

  get 'user', to: 'user#view'
  patch 'user', to: 'user#update'

  get 'tasks', to: 'tasks#index'
  get 'tasks/:id', to: 'tasks#view'
  patch 'tasks', to: 'tasks#update'
end
