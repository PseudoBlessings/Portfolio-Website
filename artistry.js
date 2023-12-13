// There will only be one instance of dialog to exist, this way we can save on performance
import {Panel, Animation, HeaderItem, imageExtension, Modal} from "./JS_Module/websitemodule.js";

class ArtistryModal extends Modal
{
    constructor(/*string*/id = '', /*string*/content = '', /*string*/title = '', /*string*/creators = '', /*string*/paragraph = '')
    {
        super();
        super.dialog = document.createElement("dialog");
        super.dialog.setAttribute("id", id) // assigning the id to the html element dialog
        super.dialogID = id;
        this.content = document.createElement("div");
        this.content.setAttribute("id", "content");

        if(imageExtension(content))
        this.content.innerHTML("<img onclick=" + "\"" + id + ".showModal()" + "\"" + "src=" + "\"" + "Image/" + content + "\"" + "alt=" + "\"" + "An Artwork Called" + title + "\"" + ">");
        
        else
        this.content.innerHTML(content);


        this.text = document.createElement("div");
        this.text.setAttribute("id", "text");
        this.text.innerHTML("<h3>" + title + "<br>" + creators + "</h3>"+"<p>" + paragraph + "</p>");

        super.dialog.append(this.content, this.text);
        document.body.insertBefore(this.dialog);
    }

    updateModal(/*string*/id = '', /*string*/content = '', /*string*/title = '', /*string*/creators = '', /*string*/paragraph = '')
    {
        this.dialog.id = id;
        this.text.innerHTML("<h3>" + title + "<br>" + creators + "</h3>"+"<p>" + paragraph + "</p>");
        if(imageExtension(content))
        this.content.innerHTML("<img onclick=" + "\"" + id + ".showModal()" + "\"" + "src=" + "\"" + "Image/" + content + "\"" + "alt=" + "\"" + "An Artwork Called" + title + "\"" + ">");
        
        else
        this.content.innerHTML(content);
    }
}

class MotionMediaPanel extends Panel
{
    constructor(name = '', image = '')
    {
        super();
        super.name = name;
        super.image = image;
        this.id = name;
    }

    renderImage(element = document.createElement("img") /*HtmlElement*/, path = "" /*string*/)
    {
        if(imageExtension(this.image)) // this tells us that the image is stored locally
        super.renderImage(element, path);

        else
        element.src = "http://img.youtube.com/vi/" + this.image + "/mqdefault.jpg" // this assumes that all images are within the Image folder
    }
}