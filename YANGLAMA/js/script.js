const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
hamburger.addEventListener('click', () => sidebar.classList.add('active'));
closeBtn.addEventListener('click', () => sidebar.classList.remove('active'));

const searchToggle = document.querySelector(".search-toggle");
const searchOverlay = document.querySelector(".search-overlay");
const searchInput = document.getElementById("searchInput");
const searchClose = document.querySelector(".search-close");

searchToggle.addEventListener("click", () => {
    searchOverlay.classList.add("active");
    searchInput.focus();
});

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchOverlay.classList.remove("active");
        searchInput.value = "";
    }
});

searchClose.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    searchInput.value = "";
});