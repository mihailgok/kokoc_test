document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("blog__card__like")) {
            e.preventDefault();
            e.target.classList.toggle("active");
        }
    });
});