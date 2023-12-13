
// Module Classes
export class Panel //this is the parent class for all Panel classes
{
	constructor(title = '', summary = '', image = '')
	{
		this.title = title;
		this.id = title;

		//creating the summary or paragraph html element <p>
		this.panel = document.createElement("div");
		this.panel.setAttribute("id", this.id);
		//creating the summary or paragraph html element <p>
		if(summary != '')
		{
			this.summary = document.createElement("p")
			this.summary.textContent(summary);
		}
		//creating the image html element <img> 
		this.image = document.createElement("img");
		this.image.src = image;
		//putting them all together
		this.panel.append(this.summary, this.image);
	}

	changeImage(image)
	{
		this.image.src = image;
	}

	changeSummary(summary)
	{
		this.summary.textContent(summary)
	}
}

export class Animation // this is a class containing the name, location, and duration of the animation.
{
	constructor(name, duration)
	{
		this.name = name; // Type: String | this is the name of the animation and the file name
		this.duration = duration; // Type: Int (0,∞)| this is the durration of the animation represented by the amount of frames
	}
}

export class HeaderItem // Class for making header items to be added to the header
{
    constructor(image, url)
    {
        this.image = image; // Type: String | this is the file name of the image, include the extension
        this.url = url; // Type: String | this is the url of the link
    }
}

export class Modal // Class for making Modals
{
 constructor(/*string*/id = '')
 {
	this.dialog = document.createElement("dialog");
	this.dialog.setAttribute("id", id) // assigning the id to the html element dialog
	this.dialogID = id
 }

 initalizeModal() // initalize the dialouge/modal
 {
	document.body.insertBefore(this.dialog); // assumes that the dialog element will be added to the top of body, as it will be unaffected by other elements properties.
 }
}

// Module Functions

export function hyperlinkConverter(/*string*/ text) //function for adding hyperlink to texts, it recieves a string and converts it into an html dom without the text wrap. always assumes that the word to the left of the {} is what will be the hyperlink;
{
	 text.search("{") // find the position of the first 
}

export const isValidUrl = urlString=> { // code from: https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url#how-to-use-a-regular-expression-constructor
	var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}

export function imageExtension (/*string*/ file)
{
	if(jpegExtention(file) || pngExtention(file) || gifExtention(file) || svgExtention(file) || webpExtention(file))
	{return true}

	else
	{return false}
}

export function jpegExtention (/*string*/ file)
{
	let jpegRegex = new RegExp('.jpg', '.jpeg', '.jfif', 'pjpeg', '.pjp');

	if(jpegRegex.test(file))
	{return true;}

	else
	{return false;}
}

export function pngExtention (/*string*/ file)
{
	let pngRegex = new RegExp('.png');

	if(pngRegex.test(file))
	{return true;}

	else
	{return false;}
}

export function gifExtention (/*string*/ file)
{
	let gifRegex = new RegExp('.gif');

	if(gifRegex.test(file))
	{return true;}

	else
	{return false;}
}

export function svgExtention (/*string*/ file)
{
	let svgRegex = new RegExp('.svg');

	if(svgRegex.test(file))
	{return true;}

	else
	{return false;}
}

export function webpExtention (/*string*/ file)
{
	let webpRegex = new RegExp('.webp');

	if(webpRegex.test(file))
	{return true;}

	else
	{return false;}
}

