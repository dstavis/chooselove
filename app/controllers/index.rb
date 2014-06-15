require 'JSON'

get '/' do
	erb :index
end

get '/circumstances' do
  circumstances = Circumstance.all.sample(5).map do |circumstance|
    {description: circumstance.description, icon: circumstance.icon}
  end
  return circumstances.to_json
end