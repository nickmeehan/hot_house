# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


data_list = [
	["HB_1", 50.1, -114.1,"Address_1"],
	["HB_2", 50.2, -114.2,"Address_2"]
]

data_list.each do |builder_name,latitude,longitude,address|
	builder = Builder.create(name: builder_name)	
	builder.homes << Home.create!(latitude: latitude, longitude: longitude, address: address)
end