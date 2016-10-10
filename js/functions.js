function createJob(element, job_object) {
	var code = `
		<div class="work-entry">
			<img src="%image%" class="work-image">
			<div class="work-details">
				<a href="#">%company%, %location% - %role%</a>
				<div class="date-text">%start_date% - %end_date%</div>
				<p><br>%description%</p>
			</div>
		</div>
	`;

	code = code.replace("%image%", job_object.logo);
	code = code.replace("%company%", job_object.company);
	code = code.replace("%location%", job_object.location);
	code = code.replace("%role%", job_object.role);
	code = code.replace("%start_date%", job_object.started);
	code = code.replace("%end_date%", job_object.ended);
	code = code.replace("%description%", job_object.description);

	element.append(code);
}

function createEducation(element, degree_object) {
	var code = `
		<div class="education-entry">
			<a href="#">%university%</a>
			<a href="#">%course% - %level%</a>
			<div class="date-text">%start_date% - %end_date%</div>
			<br><p>Relevant modules studied:</p>
			<div style="padding-left:10px;">
				<ul id="modules"></ul>
			</div>
		</div>
	`;

	code = code.replace("%university%", degree_object.university);
	code = code.replace("%course%", degree_object.course);
	code = code.replace("%level%", degree_object.level);
	code = code.replace("%start_date%", degree_object.started);
	code = code.replace("%end_date%", degree_object.ended);

	element.append(code);

	for (var i = 0; i < degree_object.modules.length; i++) {
		$("#modules:last").append("<li>%data%</li>".replace("%data%", degree_object.modules[i]));		
	}

	
}