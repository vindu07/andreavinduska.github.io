document.addEventListener("DOMContentLoaded", () => {

    var theme = getCookie("theme");
    if(theme == "dark") document.body.classList.add("dark");
    
    /* ACTIVE PAGE HIGHLIGHTING */
    try{
        let currPage = document.location.pathname.slice(1); // removes "/" at start
        if(currPage == "") currPage = "home";

        //removes end "/" if present (problems with github)
        if(currPage.charAt(currPage.length -1) == "/") currPage = currPage.substring(0, currPage.length -1);

        //console.log(currPage); //debug
        
        const activeBtn = document.querySelector(`header nav #${currPage}`);
        activeBtn.classList.add("active");

    } catch(ex) {
        console.error("_ERR -- Active page highlighting -- " + ex.toString());
    }

    /* SETTINGS */
    const themeBtn = document.querySelector("header #theme-btn");
    const langBtn = document.querySelector("header #lang-btn");

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(getCookie("theme") == "dark") document.cookie  = "theme ="
        else document.cookie = "theme = dark";
    });
  
});

// gets the cookie with specified name
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}