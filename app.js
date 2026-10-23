import * as home from './pages/home.js';
import * as projects from './pages/projects.js';


document.addEventListener("DOMContentLoaded", () => {

    console.log("Page Loaded");

    // event listener elementi interattivi
	{
    const langBtn = document.querySelector("header #header-btn-lang");
    const themeBtn = document.querySelector("header #header-btn-theme");
    const setBtn = document.querySelector("header #header-btn-settings");

    langBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("eng");
        document.body.classList.toggle("ita");
    });
    themeBtn.addEventListener("click", ()=>{
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    });
	}

    // event listener pagine
	{
    const homePage = document.querySelector("main #menu #home");
    const projectsPage = document.querySelector("main #menu #projects");

    homePage.addEventListener("click", ()=>{
        loadPage("home");

		projectsPage.classList.remove("active");
		homePage.classList.add("active");
    });
	projectsPage.addEventListener("click", ()=>{
        loadPage("projects");

		homePage.classList.remove("active");
		projectsPage.classList.add("active");
    });
	}


    console.log("Event Listeners Created");


});

async function loadPage(page){

	try{
	
		await loadHTML(page);
		setTimeout(()=>{loadJS(page)}, 200); //200ms delay
	}catch(ex){
		console.error("loadPage -- " + ex);
	}
}
async function loadHTML(page){

	const container = document.querySelector("main #content");
	container.innerHTML = "";

	let url;

	switch(page){
		case "home": url = './pages/home.html'; break;
		case "projects": url = './pages/projects.html'; break;
		default: //mettere rickroll
	}

	fetch(url).then(response => response.text()).then(data => container.innerHTML = data);
	

	
        
}

function loadJS(page){
       
    switch(page){
        
        case "home": home.init(); break;
        case "projects": projects.init(); break;
        default: 
    } 
}