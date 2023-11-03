export{Panel, Animation, HeaderItem };
 
class Panel //this is the parent class for all Panel classes
{
	constructor(name, image, summary, url, textcolor)
	{
		this.name = name; //Type: String | This is the name of the panel that will be used within the 
		this.image = image; //Type: String | This is the name of the image that you want with the panel
		this.summary = summary; //Type: String | this is a summary of what the panel is displaying
		this.url = url; //Type: String | This is the url of where you want this link to take you when you click on it
		this.textcolor = textcolor; //Type: String | This is the color of the text overlaying the panel's image. 
	}

	gotoURL(element) // this is to make the panel clickable
	{
		element.onclick = this.url;
	}

	renderImage(element /*html src*/, path = "" /*string*/) // this is renders an image on to the panel
	{
		element.src = "Image/" + path + this.image; // this assumes that all images are within the Image folder
	}

	renderTextColor (element) // this renders the elements color
	{
		element.style.color = this.textcolor; 
	}

}

class Animation // this is a class containing the name, location, and duration of the animation.
{
	constructor(name, duration)
	{
		this.name = name; // Type: String | this is the name of the animation and the file name
		this.duration = duration; // Type: Int (0,∞)| this is the durration of the animation represented by the amount of frames
	}
}

class HeaderItem // Class for making header items to be added to the header
{
    constructor(image, url)
    {
        this.image = image; // Type: String | this is the file name of the image, include the extension
        this.url = url; // Type: String | this is the url of the link
    }
}