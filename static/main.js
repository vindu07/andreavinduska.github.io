document.addEventListener("DOMContentLoaded", () => {

    
    /* ACTIVE PAGE HIGHLIGHTING */
    {
    let currPage = document.location.pathname.slice(1); // removes "/" at start
    if(currPage == "") currPage = "home";

    //console.log(currPage); //debug
    
    const activeBtn = document.querySelector(`header nav #${currPage}`);
    activeBtn.classList.add("active");
    }
  
});
