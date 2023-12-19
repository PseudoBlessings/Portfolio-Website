import {Panel, revealOnClick} from "./JS_Module/websitemodule.js";

import artistrydata from './Data/Artistry/proejctdata.json' assert {type: 'json'};
import programmingdata from './Data/Programming/proejctdata.json' assert {type: 'json'};
import employmentdata from './Data/employmentdata.json' assert {type: 'json'};

programmingdata.ProgrammingProjects.forEach(programmingproject =>{
    let card = document.createElement("div");
    card.className = "Card";
    card.setAttribute("onclick", "window.open('"+ programmingproject.URL +"', '"+ "Github" + programmingproject.Title +"')");
    let cardtext = document.createElement("div");
    cardtext.className = "Card-Text";
    let h3 = document.createElement("h3");
    h3.textContent = programmingproject.Title;
    let p = document.createElement("p");
    p.textContent = programmingproject.Summary;
    cardtext.append(h3, p);
    let img = document.createElement("img");
    if(programmingproject.ImagePath.length != 0)
    img.src = programmingproject.ImagePath;
    card.append(cardtext, img);
    document.getElementById("feature-slideshow").appendChild(card);
})

employmentdata.Employment.forEach(employment =>{
    if(employment.Tag.includes("Programming") && employment.Tag.includes("Feature"))
    {
        let card = document.createElement("div");
        card.className = "Card";
        card.setAttribute("onclick", "window.open('"+ employment.URL +"', '"+ "Github" + employment.Employer +"')");
        let cardtext = document.createElement("div");
        cardtext.className = "Card-Text";
        let h3 = document.createElement("h3");
        h3.textContent = employment.Employer;
        let h4 = document.createElement("h4");
        h4.textContent = employment.Position;
        let p = document.createElement("p");
        p.textContent = employment.Summary;
        cardtext.append(h3, h4, p);
        let img = document.createElement("img");
        if(employment.ImagePath.length != 0);
        img.src = employment.ImagePath;
        card.append(cardtext, img);
        document.getElementById("employment-slideshow").appendChild(card);
    }
})

employmentdata.Employment.forEach(employment =>{
    if(employment.Tag.includes("Programming"))
    {
    let gallery = document.createElement("div");
    gallery.className = "Gallery HDImage";
    gallery.setAttribute("onclick", "window.open('"+ employment.URL +"', '" + employment.Employer + " Staff Site" +"')");
    let gallerytext = document.createElement("div");
    gallerytext.className = "Gallery-Text";
    let h3 = document.createElement("h3");
    h3.textContent = employment.Employer;
    let p = document.createElement("p");
    p.textContent = employment.Summary;
    gallerytext.append(h3, p);
    let img = document.createElement("img");
    if(employment.ImagePath.length != 0);
    img.src = employment.ImagePath;
    gallery.append(gallerytext, img);
    document.getElementById("employment-gallery").appendChild(gallery);
    }})