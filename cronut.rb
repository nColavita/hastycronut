require 'sinatra'
require 'mandrill'

get '/home' do
	erb :homepage
end

get '/gallery' do
	erb :gallery
end

get '/order' do
	erb :order
end

get '/review' do
	erb :review
end