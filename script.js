const menu = document.querySelector(".nav");
const icon = document.querySelector(".menu-icon");

icon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (e) => {
    if (
        menu.classList.contains("active") &&
        !menu.contains(e.target) &&
        !icon.contains(e.target)
    ) {
        menu.classList.remove("active");
    }
});

// فتح القائمة المنسدلة عند الضغط على زر التصنيفات
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    dropdownMenu.classList.toggle("active");

});

// إغلاق القائمة المنسدلة عند الضغط خارجها
document.addEventListener("click", (e) => {
    if (
        dropdownMenu.classList.contains("active") &&
        !dropdownMenu.contains(e.target) &&
        !dropdownBtn.contains(e.target)
    ) {
        dropdownMenu.classList.remove("active");
    }
});