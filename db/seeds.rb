# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


data_list = [
	#Developer				,Type of homes 					,Address 											,Long 	    ,Lat 		 ,Area Sq ft, Bed_No,Bath_No, Price   link to photos
	["Devine Custom homes"	,"Custom"						,"39 Springbluff Point SW"							,"51.030098","-114.196924",3295,		4,4.5 	, 400000	, ["http://www.devinecustomhomes.ca/Admin/upload/main/XY1104%203d%20f.jpg"]],
	["Homes by Avi"			,"Detached Home (Belvedere)"	,"167 Walden Terrace SE"							,"50.881047","-114.030542",2408,		3,2.5 	, 565900 	, ["http://www.homesbyavi.com/images/default-source/homestylerender/Hawthorne-RenderImage-Austin-943-full" , "http://www.homesbyavi.com/images/default-source/floorplanimage/qpc-6103"]],
	["Avi Urban"			,"Townhouse (Canoe)"			,"245 Forge Road SE"								,"51.006067","-114.056113",741 ,		1,1 	, 200000    , ["http://www.aviurban.com/canoe/drive/uploads/2014/07/cam-2_port-cochere.jpg" , "http://www.aviurban.com/canoe/drive/uploads/2014/07/plan-A2.png"]],
	["Morrison Home"		,"Detached house (Solaris)"		,"Cranston (Highway 22X (Marquis of Lorne Trail)" 	,"50.889250","-113.985300",988 ,		1,1.5 	, 259876    , ["http://www.morrisonhomes.ca/images/uploads/floorplans/372/solaris_main_and_optional_basement_main__upper.png , http://www.morrisonhomes.ca/images/uploads/exterior/372/solaris_web_cranston__small.jpg"]],
	["Stepper Homes"		,"Detached Home (Van Horne)"	,"681 Copperpond Blvd SE"						    ,"50.920195","-113.928605",1947,		3,2.5   , 499990	, ["http://www.stepperhomes.com/assets/images/Quick%20Possessions/681%20CP%20Blvd/681-CP-Blvd-main.png"]],
	["Cardel Homes"			,"Detached Home (Yorkton)"		,"247 CHAPARRAL VALLEY WAY SE T2X 0X3" 				,"50.887925","-114.016449",2082,		3,2.5 	, 524900	, ["http://www.cardelhomes.com/wp-content/uploads/2014/06/QKP-247ChapValleyWay.png"]],
	["Cardel Homes"			,"Detached Home (Harmony 2)"	,"45 WALDEN CLOSE SE" 								,"50.874318","-114.030234",2294,		3,2.5 	, 517700	, ["http://www.cardelhomes.com/wp-content/uploads/2014/06/QKP-45WaldenClose-PLN.png" , "http://www.cardelhomes.com/wp-content/uploads/2014/06/QKP-45WaldenClose-ELEV.png"]],
	["Shane Homes"			,"Detached Home (Andorra II)"	,"815 New Brighton Drive SE, Calgary"				,"50.923559","-113.938785",2054,		3,2.5 	, 498765    , ["http://www.shanehomes.com/assets/home/196/gallery/1148/exterior.jpg"]],
]


data_list.each do |builder_name,home_type,address,latitude,longitude,area,bed_num,bath_num,price,links_to_photos|
	builder = Builder.create(name: builder_name)	
	builder.homes << Home.create!(latitude: latitude, longitude: longitude, address: address, price: price, bedroom_count: bed_num, bathroom_count: bath_num, image_url_array: links_to_photos)
end