document.addEventListener("DOMContentLoaded", () => {

    console.log("Page Loaded");

    const langBtn = document.querySelector("header #header-btn-lang");
    const themeBtn = document.querySelector("header #header-btn-theme");

    langBtn.addEventListener("click", ()=>{
            document.body.classList.toggle("eng");
            document.body.classList.toggle("ita");
    });
    themeBtn.addEventListener("click", ()=>{
            document.body.classList.toggle("dark");
            document.body.classList.toggle("light");
    });


    console.log("Event Listeners Created");


});