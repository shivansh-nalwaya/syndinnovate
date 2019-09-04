require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Api
  class Application < Rails::Application
    config.load_defaults 5.2
    config.autoload_paths << Rails.root.join("lib")
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins "*"
        resource "*", headers: :any, methods: [:get, :post, :options]
      end
    end
  end
end
