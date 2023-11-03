import {Panel, Animation, HeaderItem } from "./JS_Module/websitemodule.js";

class EmployerPanel extends Panel{
	constructor(employer, position, duration, summary, filename, url, blacktext) {
		super();
		super.name = employer;
		this.position = position;
		this.duration = duration;
		super.summary = summary;
		super.image = filename;
		super.url = url;
		if(blacktext == true)
		{
			super.textcolor = "black";
		}

		else
		{
			super.textcolor = "white";
		}
	}

	displayText(element) // meant to display the text for the employer panel
	{
		element.innerHTML = (this.name + "<br>" + this.position + "<br>" + this.duration);
		this.renderTextColor(element);
	}
};

class FeaturedPanel extends Panel{
	constructor(name, award, skills, duration, summary, filename, url, blacktext){
		super();
		super.name = name;
		this.award = award;
		this.skills = skills;
		this.duration = duration;
		super.summary = summary;
		super.image = filename;
		super.url = url;
		if(blacktext == true)
		{
			super.textcolor = "black";
		}

		else
		{
			super.textcolor = "white";
		}
	}

	displayText(element) // meant to display the text for the featured panel
	{
		element.innerHTML = (this.name + "<br>" + this.award + "<br>" + this.skills + "<br>" + this.duration);
		this.renderTextColor(element);
	}

	
};

fetch("./Data/employerdata.json")
	.then(function(res){
		return res.json();
	})
	.then(function(employerJSON){
		var paneltest = employerJSON[0];

		const EMPLOYERPANELTEST = new EmployerPanel (paneltest.Employer, paneltest.Position, paneltest.Duration, paneltest.Summary, paneltest.Filename, paneltest.URL, paneltest.BlackText);

		employerJSON.forEach((panel, index) => generatePanel(panel, index, "EMPLOYER", "employerJSON", "EmployerPanel"))
	})

fetch('./Data/projectdata.json')
	.then(function(res){
		return res.json();
	})
	.then(function (projectJSON){

		
		projectJSON.forEach((panel, index) => generatePanel(panel, index, "FEATURE", "projectJSON", "FeaturedPanel"))
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

function generatePanel(panel /*Type: JSON Array*/, index /*Type: Int (0,∞)*/, section /*Type: String*/, json /*Type: String*/, className /*Type: String*/) // generates panels for both the employer and featured sections
{
	if(section == "EMPLOYER") // this is if we are generating employees section
	{
		eval("globalThis." + section + "PANEL" + (index+1) + " = " + "new " + className + " (" + "panel" + ".Employer" + ", " + "panel" + ".Position" +
		 ", " + "panel" + ".Duration"+ ", " + "panel" + ".Summary" + ", " + "panel" + ".FileName" + ", " + "panel" + ".URL" + ", " + "panel" + ".BlackText" + ");"); // genertates the employerpanel class objects

		eval(section + "PANEL" + (index+1) + "." + "displayText" + "(" + "document.querySelector(\"" + "#employment-panel-" + (index+1) + " > " + "h3\")" + ");"); // renders the text
		eval(section + "PANEL" + (index+1) + "." + "renderImage" + "(" + "document.querySelector(\"" + "#employment-panel-" + (index+1) + " > " + "img\")" + ");"); // renders the image
		
		if(panel.Employer == "") // removes panel if empty
		{
			document.getElementById("employer-panel-" + (index+1)).remove();
		};

	}
	
	else // this is if we are generating the featured section
	{
		eval("globalThis." + section + "PANEL" + (index+1) + " = " + "new " + className + " (" + "panel" + ".ProjectName" + ", " + "panel" + ".Award" +
		 ", " + "panel" + ".Skills"+ ", " + "panel" + ".Duration" + ", " + "panel" + ".Summary" + ", " + "panel" + ".FileName" + ", " + "panel" + ".URL" + ", " + "panel" + ".BlackText" + ");"); // genertates the featuredpanel class objects
		
		eval(section + "PANEL" + (index+1) + "." + "displayText" + "(" + "document.querySelector(\"" + "#featured-panel-" + (index+1) + " > " + "h3\")" + ");"); // renders the text
		eval(section + "PANEL" + (index+1) + "." + "renderImage" + "(" + "document.querySelector(\"" + "#featured-panel-" + (index+1) + " > " + "img\")" + ");"); // renders the image
		
		if(panel.ProjectName == "") // removes panel if empty
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
    
