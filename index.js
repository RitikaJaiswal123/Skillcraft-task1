document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {  
            body.classList.add("scrolled");
        } else {
            body.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { 
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});
