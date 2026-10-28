document.addEventListener("DOMContentLoaded", () => {

    
    /* ACTIVE PAGE HIGHLIGHTING */
    {
    let currPage = document.location.pathname.slice(1); // removes "/" at start
    if(currPage == "") currPage = "home";
    //removes end "/" if present (problems with github)
    if(currPage.charAt(currPage.length -1) == "/") currPage = currPage.substring(0, currPage.length -1);

    console.log(currPage); //debug
    
    const activeBtn = document.querySelector(`header nav #${currPage}`);
    activeBtn.classList.add("active");
    }
  
});
