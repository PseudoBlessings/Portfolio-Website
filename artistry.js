// There will only be one instance of dialog to exist, this way we can save on performance
import {Panel, Animation, HeaderItem, imageExtension, Modal} from "./JS_Module/websitemodule.js";

import artistrydata from './Data/Artistry/proejctdata.json' assert {type: 'json'};
import programmingdata from './Data/Programming/proejctdata.json' assert {type: 'json'};
import employmentdata from './Data/employmentdata.json' assert {type: 'json'};

artistrydata.MotionMediaProjects.forEach( motionmediaproject =>
    {
        let img = document.createElement("img")
        img.src = motionmediaproject.ImagePath
        let li = document.createElement("li")
        li.appendChild(img)
        let ul = document.getElementById("motion-media-unorder-list")
        ul.appendChild(li)
    }
)

artistrydata.VisualArtsProjects.forEach( visualartsproject =>
    {
        visualartsproject.ImagePath.forEach(image =>{
            let img = document.createElement("img")
            img.src = image
            let li = document.createElement("li")
            li.appendChild(img)
            let ul = document.getElementById("visual-arts-unorder-list")
            ul.appendChild(li)
        })
    }
)

artistrydata.WebDesignProjects.forEach( webdesignproject =>
    {
        let img = document.createElement("img")
        img.src = webdesignproject.ImagePath
        img.setAttribute("onclick", "parent.open('" + webdesignproject.URL + "')")
        let li = document.createElement("li")
        li.appendChild(img)
        let ul = document.getElementById("web-design-gallery")
        ul.appendChild(li)
    }
)