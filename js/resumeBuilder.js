$("#main").append("James Fraser");

var bio = {
	"name": "James Fraser",
	"role": "Automation Engineer",
	"contact": {
		"email": "james_fraser@outlook.com",
		"phone": "07887 505767"	
	}	
}

var education = {
	"degrees": [
		{
			"university": "University of Strathclyde",
			"course": "Computer & Electronic Systems",
			"level": "MEng",
			"startDate": "September 2010",
			"endDate": "July 2015"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedNumber = HTMLmobile.replace("%data%", bio.contact.phone);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedEmail);
$("#header").append(formattedNumber);


