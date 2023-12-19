import {Panel, revealOnClick} from "./JS_Module/websitemodule.js";

import artistrydata from './Data/Artistry/proejctdata.json' assert {type: 'json'};
import programmingdata from './Data/Programming/proejctdata.json' assert {type: 'json'};
import employmentdata from './Data/employmentdata.json' assert {type: 'json'};

console.log(artistrydata);
console.log(programmingdata);
console.log(employmentdata);
class EmploymentPanel extends Panel{
	constructor(employer = '', position = '', duration = '', imagepath = '', url = '') 
	{
		super();
		var linebreaker = "\r\n"; //use this to add new lines
		this.title = employer + position;
		this.id = employer + position;
		

		//creating the summary or paragraph html element <p>
		this.panel = document.createElement("div");
		this.panel.setAttribute("id", this.id);
		this.panel.setAttribute("class", "panel");
		if(url != '')
		{
			this.panel.setAttribute("onclick", "open(" + +"'"+ url +"'"+ ", '_blank')");
		}
		//creating the summary or paragraph html element <p>
		this.summary = document.createElement("p");
		this.summary.setAttribute('style', 'white-space: pre;');
		this.summary.textContent = employer + linebreaker + position + linebreaker + duration;
		//creating the image html element <img> 
		this.image = document.createElement("img");
		this.image.src = imagepath;
		//putting them all together
		this.panel.append(this.summary, this.image);
	}

	changeSummary(employer = '', position = '', duration = '')
	{
		var linebreaker = "\r\n"; //use this to add new lines
		this.summary.textContent = employer + linebreaker + position + linebreaker + duration;
	}

};

class FeaturedPanel extends Panel{
	constructor(title = '', award = '', skills = [''], duration = '', imagepath = '', url = '')
	{
		super();
		var linebreaker = "\r\n"; //use this to add new lines
		this.title = title
		this.id = title
		

		//creating the summary or paragraph html element <p>
		this.panel = document.createElement("div");
		this.panel.setAttribute("id", this.id);
		this.panel.setAttribute("class", "panel");
		if(url != '')
		{
			this.panel.setAttribute("onclick", "open(" + +"'"+ url +"'"+ ", '_blank')");
		}
		//creating the summary or paragraph html element <p>
		this.summary = document.createElement("p");
		this.summary.setAttribute('style', 'white-space: pre;');
		this.summary.textContent = title + linebreaker + award + linebreaker + skills[0] + linebreaker + duration;
		//creating the image html element <img> 
		this.image = document.createElement("img");
		this.image.src = imagepath;
		//putting them all together
		this.panel.append(this.summary, this.image);
	}
	
	changeSummary(title = '', award = '', skills = '', duration = '')
	{
		var linebreaker = "\r\n"; //use this to add new lines
		this.summary.textContent(title + linebreaker + award + linebreaker + skills + linebreaker + duration);
	}	
};

var featuredpanels = [new FeaturedPanel(artistrydata.MotionMediaProjects[0].Title,'', [''],artistrydata.MotionMediaProjects[0].Date, artistrydata.MotionMediaProjects[0].ImagePath, artistrydata.MotionMediaProjects[0].URLs[0]), 
new FeaturedPanel(artistrydata.VisualArtsProjects[0].Title,'', [''],artistrydata.VisualArtsProjects[0].Date, artistrydata.VisualArtsProjects[0].ImagePath[0], artistrydata.VisualArtsProjects[0].URLs[0]),
new FeaturedPanel(programmingdata.ProgrammingProjects[0].Title,'',[''],programmingdata.ProgrammingProjects[0].Date,programmingdata.ProgrammingProjects[0].ImagePath,programmingdata.ProgrammingProjects[0].URL),
new FeaturedPanel(programmingdata.ProgrammingProjects[1].Title,'',[''],programmingdata.ProgrammingProjects[1].Date,programmingdata.ProgrammingProjects[1].ImagePath,programmingdata.ProgrammingProjects[0].URL)]

var i = 0
featuredpanels.forEach(featurepanel => 
	{
		if(i % 2 == 0){document.getElementById("feature-leftpanels").appendChild(featurepanel.panel)} 
		else{{document.getElementById("feature-rightpanels").appendChild(featurepanel.panel)}}
		i++
	})

	i = 0;

	var employmentpanels = [new EmploymentPanel(employmentdata.Employment[0].Employer,employmentdata.Employment[0].Position,employmentdata.Employment[0].Duration,employmentdata.Employment[0].ImagePath,employmentdata.Employment[0].URL),
	new EmploymentPanel(employmentdata.Employment[1].Employer,employmentdata.Employment[1].Position,employmentdata.Employment[1].Duration,employmentdata.Employment[1].ImagePath,employmentdata.Employment[1].URL),
	new EmploymentPanel(employmentdata.Employment[2].Employer,employmentdata.Employment[2].Position,employmentdata.Employment[2].Duration,employmentdata.Employment[2].ImagePath,employmentdata.Employment[2].URL),
	new EmploymentPanel(employmentdata.Employment[3].Employer,employmentdata.Employment[3].Position,employmentdata.Employment[3].Duration,employmentdata.Employment[3].ImagePath,employmentdata.Employment[3].URL)]

employmentpanels.forEach(employmentpanel => 
	{
		document.getElementById("employment-panels").appendChild(employmentpanel.panel)
	})