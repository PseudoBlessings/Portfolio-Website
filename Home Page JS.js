class EmployerPanel{
	constructor(employer, position, duration, summary, filename, url, blacktext) {
		this.employer = employer;
		this.position = position;
		this.duration = duration;
		this.summary = summary;
		this.filename = filename;
		this.url = url;
		this.blacktext = blacktext;
	};
};

class ProjectPanel{
	constructor(projectname, award, skills, duration, summary, filename, url, blacktext){
		this.projectname = projectname;
		this.award = award;
		this.skills = skills;
		this.duration = duration;
		this.summary = summary;
		this.filename = filename;
		this.url = url;
		this.blacktext = blacktext;
	};
};

fetch('./EmployerData.json')
	.then(function(res){
		return res.json();
	})
	.then(function(employerJSON){

		const employerpanel1 = new EmployerPanel (employerJSON[0].Employer, employerJSON[0].Position, employerJSON[0].Duration, 
			employerJSON[0].Summary, employerJSON[0].FileName, employerJSON[0].URL, employerJSON[0].BlackText);
		
		const employerpanel2 = new EmployerPanel (employerJSON[1].Employer, employerJSON[1].Position, employerJSON[1].Duration, 
			employerJSON[1].Summary, employerJSON[1].FileName, employerJSON[1].URL, employerJSON[1].BlackText);
		
		const employerpanel3 = new EmployerPanel (employerJSON[2].Employer, employerJSON[2].Position, employerJSON[2].Duration, 
			employerJSON[2].Summary, employerJSON[2].FileName, employerJSON[2].URL, employerJSON[2].BlackText);
		
		const employerpanel4 = new EmployerPanel (employerJSON[3].Employer, employerJSON[3].Position, employerJSON[3].Duration, 
			employerJSON[3].Summary, employerJSON[3].FileName, employerJSON[3].URL, employerJSON[3].BlackText);
		
		const employerarray = [employerpanel1, employerpanel2, employerpanel3, employerpanel4];
		
		document.querySelector("#employment-panel-1 > h3").innerHTML = (employerpanel1.employer + "<br>" + employerpanel1.position + "<br>" + employerpanel1.duration);
		document.querySelector("#employment-panel-2 > h3").innerHTML = (employerpanel2.employer + "<br>" + employerpanel2.position + "<br>" + employerpanel2.duration);
		document.querySelector("#employment-panel-3 > h3").innerHTML = (employerpanel3.employer + "<br>" + employerpanel3.position + "<br>" + employerpanel3.duration);
		document.querySelector("#employment-panel-4 > h3").innerHTML = (employerpanel4.employer + "<br>" + employerpanel4.position + "<br>" + employerpanel4.duration);
		
		document.querySelector("#employment-panel-1 > img").src = employerpanel1.filename;
		document.querySelector("#employment-panel-2 > img").src = employerpanel2.filename;
		document.querySelector("#employment-panel-3 > img").src = employerpanel3.filename;
		document.querySelector("#employment-panel-4 > img").src = employerpanel4.filename;

		
		employerarray.forEach(changecoloremployer);

		employerarray.forEach(removepanel);

		function changecoloremployer(panel, index){
			if(panel.blacktext == true)
			{
				document.querySelector("#employment-panel-" + (index+1) + " > h3").style.color = "black";
			}
			return;
		}
	})

fetch('./ProjectData.json')
	.then(function(res){
		return res.json();
	})
	.then(function (projectJSON){
		const projectpanel1 = new ProjectPanel (projectJSON[0].ProjectName, projectJSON[0].Award, projectJSON[0].Skills,
			 projectJSON[0].Duration, projectJSON[0].Summary, projectJSON[0].FileName, projectJSON[0].URL, projectJSON[0].BlackText);
		const projectpanel2 = new ProjectPanel (projectJSON[1].ProjectName, projectJSON[1].Award, projectJSON[1].Skills,
			 projectJSON[1].Duration, projectJSON[1].Summary, projectJSON[1].FileName, projectJSON[1].URL, projectJSON[1].BlackText);
		const projectpanel3 = new ProjectPanel (projectJSON[2].ProjectName, projectJSON[2].Award, projectJSON[2].Skills,
			 projectJSON[2].Duration, projectJSON[2].Summary, projectJSON[2].FileName, projectJSON[2].URL, projectJSON[2].BlackText);
		const projectpanel4 = new ProjectPanel (projectJSON[3].ProjectName, projectJSON[3].Award, projectJSON[3].Skills,
			 projectJSON[3].Duration, projectJSON[3].Summary, projectJSON[3].FileName, projectJSON[3].URL, projectJSON[3].BlackText);

		projectarray = [projectpanel1, projectpanel2, projectpanel3, projectpanel4];

		document.querySelector("#featured-panel-1 > h3").innerHTML = (projectpanel1.projectname + "<br>" + projectpanel1.award + 
		"<br>" + projectpanel1.skills + "<br>" + projectpanel1.duration)
		document.querySelector("#featured-panel-2 > h3").innerHTML = (projectpanel2.projectname + "<br>" + projectpanel2.award + 
		"<br>" + projectpanel2.skills + "<br>" + projectpanel2.duration)
		document.querySelector("#featured-panel-3 > h3").innerHTML = (projectpanel3.projectname + "<br>" + projectpanel3.award + 
		"<br>" + projectpanel3.skills + "<br>" + projectpanel3.duration)
		document.querySelector("#featured-panel-4 > h3").innerHTML = (projectpanel4.projectname + "<br>" + projectpanel4.award + 
		"<br>" + projectpanel4.skills + "<br>" + projectpanel4.duration)

		document.querySelector("#featured-panel-1 > img").src = projectpanel1.filename;
		document.querySelector("#featured-panel-2 > img").src = projectpanel2.filename;
		document.querySelector("#featured-panel-3 > img").src = projectpanel3.filename;
		document.querySelector("#featured-panel-4 > img").src = projectpanel4.filename;

		
		projectarray.forEach(changecolorproject);

		function changecolorproject(panel, index){
			if(panel.blacktext == true)
			{
				document.querySelector("#featured-panel-" + (index+1) + " > h3").style.color = "black";
			}
			return;
		}

		projectarray.forEach(removepanel);


	});

function removepanel(panel, index){
	if(panel instanceof EmployerPanel)
	{
		if(panel.employer == "")
		{
			document.getElementById("employer-panel-" + (index+1)).remove();
		};
	}

	if(panel instanceof ProjectPanel)
	{
		if(panel.projectname == "")
		{
			document.getElementById("featured-panel-" + (index+1)).remove();
		};
	}
}

const AnimateOnScrolls = document.querySelectorAll(".AnimateOnScroll")

const observer = new IntersectionObserver(entries => 
	{
		entries.forEach(entry =>
			{
				entry.target.classList.toggle("animate", entry.isIntersecting)
				if (entry.isIntersecting) observer.unobserve(entry.target)
			}
		)
		console.log(entries)
	}, {
		threshold: 0.5,
	})

	AnimateOnScrolls.forEach(AnimateOnScroll =>
		{
			observer.observe(AnimateOnScroll)
		})
	

		const Navigations = document.querySelectorAll(".Nav");
		
		for (let i = 0; i < Navigations.length; i++)
		{
			Navigations[i].addEventListener("click", function(evt)
			{
				var target = evt.target;
				if(target.id == "pgbtn")
				{
					headerdisplay();
					navdisplay(document.getElementById("programmingnav"))
				}

				else if (target.id == "pbbtn")
				{
					headerdisplay();
					navdisplay(document.getElementById("psuedoblessingsnav"))
				}

				else if (target.id == "artbtn")
				{
					headerdisplay();
					navdisplay(document.getElementById("artistrynav"))
				}
			})
		}
		
		function navdisplay(id)
		{
			var x = id;

			if(x.style.display === "none" || x.style.display === "")
			{
				x.style.display = "grid";
			}

			else
			{
				x.style.display="none";
			}
		}
		
		
		function headerdisplay()
		{
			x = document.getElementById("header");
			if(x.style.display === "none")
			{
				x.style.display = "flex";
			}

			else
			{
				x.style.display="none";
			}
		}

const AnimateOnButtonPress = document.querySelectorAll(".AnimateOnButtonPress");

for (let i = 0; i < AnimateOnButtonPress.length; i++){
	AnimateOnButtonPress[i].addEventListener('click', (ev)=>{
		let btn = ev.target;
		if(btn.classList.contains('animate'))
			{
				btn.classList.remove('animate');
				void btn.offsetWidth;
				btn.classList.add('animate', 'reverse');
				btn.addEventListener("animationend",function (ev) {
					btn.classList.remove('animate', 'reverse');
				})
				
			}
		else
			{
				btn.classList.add('animate');
			}
	})
}
    
