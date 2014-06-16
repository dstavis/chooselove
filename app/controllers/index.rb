# require 'JSON'

get '/' do
	erb :index
end

get '/play' do
  erb :game
end

get '/circumstances' do
  howMany = params[:howMany] || 5

  unique = false
  until unique do
    circumstances = Circumstance.all.sample(howMany).map do |circumstance|
      {id: circumstance.id, description: circumstance.description, icon: circumstance.icon}
    end
    unique = true if circumstances.length == circumstances.uniq.length
  end
  return circumstances.to_json
end