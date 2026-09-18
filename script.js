// Automatically displays the current year
document.getElementById("year").textContent =
    new Date().getFullYear();


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function () {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});