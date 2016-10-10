var bio = {
	"name": "James Fraser",
	"role": "Automation Engineer",
	"description": "A passionate software engineer experienced in development and testing approaches. Used to working in an evolving, fast-paced environment to produce world-class software. Thrives on approaching challenging problems and producing high-quality solutions.",
	"contact": {
		"email": "james_fraser@outlook.com",
		"phone": "07887 505767"	,
		"linked_in": "https://www.linkedin.com/in/JamesFraser92"	
	},
	"skills": [
		"Software development",
		"Automation",
		"Testing"
	],
}

var education = [
	{
		"university": "University of Strathclyde",
		"course": "Computer & Electronic Systems",
		"level": "MEng",
		"started": "September 2010",
		"ended": "May 2015",
		"modules": [
			"Advanced Topics in Software Engineering", 
			"Advanced Programming (Java)",
			"Logic & Algorithms",
			"Theory of Computation",
			"Building Software Systems",
			"Artificial Intelligence",
			"Computer Security",
			"Embedded Systems"
		]
	}
]

var jobs = [
	{
		"logo": "images/xedo.png",
		"company": "Xedo Software",
		"location": "Glasgow",
		"role": "Automation Engineer",
		"started": "June 2016",
		"ended": "Present",
		"description": "did stuff"
	},
	{
		"logo": "images/skyscanner.png",
		"company": "Skyscanner",
		"location": "Glasgow",
		"role": "Software Engineer",
		"started": "June 2014",
		"ended": "June 2016",
		"description": "did stuff"
	}
]
	

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var profileImage = HTMLbioPic.replace("%data%", "images/JamesFraser.JPG");

var formattedDescription = HTMLwelcomeMsg.replace("%data%", bio.description);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedNumber = HTMLphone.replace("%data%", bio.contact.phone);
var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contact.linked_in);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


$("#header").append(HTMLinfoBar);

$("#infoBar").append(HTMLcontactStart);
$("#contactBanner").append(formattedEmail);
$("#contactBanner").append(formattedNumber);


$("#infoBar").append(HTMLaltProfilesStart);

$("#altProfiles").append(formattedLinkedIn);

$("#header").append(profileImage);

$("#header").append(formattedDescription);


if (!!bio.skills) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

for (job in jobs) {
	createJob($("#workExperience"), jobs[job]);
}

for (degree in education) {
	createEducation($("#education"), education[degree]);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
