import {Panel} from "./JS_Module/websitemodule.js";

class EmploymentPanel extends Panel{
	constructor(employer = '', position = '', duration = '', imagepath = '', url = '') 
	{
		super();
		linebreaker = "\r\n"; //use this to add new lines
		this.title = employer + position;
		this.id = employer + position;
		

		//creating the summary or paragraph html element <p>
		this.panel = document.createElement("div");
		this.panel.setAttribute("id", this.id);
		if(url != '')
		{
			this.panel.setAttribute("onclick", "open(" + +"'"+ url +"'"+ ", '_blank')");
		}
		//creating the summary or paragraph html element <p>
		this.summary = document.createElement("p")
		this.summary.textContent(employer + linebreaker + position + linebreaker + duration);
		//creating the image html element <img> 
		this.image = document.createElement("img");
		this.image.src = imagepath;
		//putting them all together
		this.panel.append(this.summary, this.image);
	}

	changeSummary(employer = '', position = '', duration = '')
	{
		linebreaker = "\r\n"; //use this to add new lines
		this.summary.textContent(employer + linebreaker + position + linebreaker + duration);
	}

};

class FeaturedPanel extends Panel{
	constructor(title = '', award = '', skills = '', duration = '', imagepath = '', url = '')
	{
		super();
		linebreaker = "\r\n"; //use this to add new lines
		this.title = title
		this.id = title
		

		//creating the summary or paragraph html element <p>
		this.panel = document.createElement("div");
		this.panel.setAttribute("id", this.id);
		if(url != '')
		{
			this.panel.setAttribute("onclick", "open(" + +"'"+ url +"'"+ ", '_blank')");
		}
		//creating the summary or paragraph html element <p>
		this.summary = document.createElement("p")
		this.summary.textContent(title + linebreaker + award + linebreaker + skills + linebreaker + duration);
		//creating the image html element <img> 
		this.image = document.createElement("img");
		this.image.src = imagepath;
		//putting them all together
		this.panel.append(this.summary, this.image);
	}
	
	changeSummary(title = '', award = '', skills = '', duration = '')
	{
		linebreaker = "\r\n"; //use this to add new lines
		this.summary.textContent(title + linebreaker + award + linebreaker + skills + linebreaker + duration);
	}	
};


