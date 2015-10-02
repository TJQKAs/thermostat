require 'sinatra/base'

class ThermostatApp < Sinatra::Base
  run! if app_file == $0
  enable :sessions

  # set :public_folder, Proc.new { File.join(root, "public") }
  set :views, Proc.new { File.join(root, "app/views") }

  post '/' do
    temperature = params[:temperature]
    session[:temperature] = temperature
  end

  get '/' do
    if session[:temperature]
      puts "temperature retrieved"
      @temperature = session[:temperature]
    else
      @temperature = 20
    end
    erb :'index'
  end
end
