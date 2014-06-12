get '/' do
	erb :index
end

get '/circumstances' do
  @circumstances = Circumstance.all.sample(params[:remaining])
end