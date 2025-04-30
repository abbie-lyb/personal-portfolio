// Smooth scrolling function
function goToPage(pageId) {
    const sections = document.querySelectorAll(".page");
    sections.forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
}