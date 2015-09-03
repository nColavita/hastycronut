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

post '/email' do
	 email = params["email"]
	 fname = params["fname"]
	 lname = params["lname"]
	 
	 phone = params["phone"]
	 address = params["address"]
	 city = params["city"]
	 state = params["state"]
	 zip = params["zip"]
	 floorsuite = params["floorsuite"]
	 
	 cardname = params["cardname"]
	 cardnumber = params["cardnumber"]
	 expirationdate = params["expirationdate"]
	 cvc = params["cvc"]
	 
	 sender = "#{fname} #{lname}"
	 email_body = "Order placed for #{sender} at #{address} #{city}, #{state} #{zip} #{floorsuite}. Their contact info is #{email} #{phone}. Card name: #{cardname} Card number: #{cardnumber} Card expiration date: #{expirationdate} Card cvc: #{cvc}"
		 
m = Mandrill::API.new
message = {  
 :subject=> "New order placed",  
 :from_name=> sender,  
 :text=> email_body,  
 :to=>[  
   {  
     :email=> "lex213075@gmail.com",  
     :name=> "Alex McLean"  
   }  
 ],  
 :html=>"<html><h1>#{email_body}</h1></html>",  
 :from_email=> email 
}  
sending = m.messages.send message  
puts sending
redirect to '/review'

end

get '/review' do
	erb :review
end

post '/email' do
	 website = params["website"]
	 likecronut = params["likecronut"]
	 
	 email_body = "Your website rating is #{website}. The customer thinks the cronuts are #{likecronut}"
		 
m = Mandrill::API.new
message = {  
 :subject=> "New review",  
 :from_name=> sender,  
 :text=> email_body,  
 :to=>[  
   {  
     :email=> "lex213075@gmail.com",  
     :name=> "Alex McLean"  
   }  
 ],  
 :html=>"<html><h1>#{email_body}</h1></html>",  
 :from_email=> email 
}  
sending = m.messages.send message  
puts sending
redirect to '/home'
end