function onShow(){
    const showSidebar = document.querySelector(".sidebar");
    showSidebar.style.display = 'flex';
}

function onHide(){
    const showSidebar = document.querySelector(".sidebar");
    showSidebar.style.display = 'none';
}

const mainNavLinks = document.querySelectorAll(".main a");
mainNavLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor link
        event.preventDefault();

        // Get the target section ID from the href attribute
        const targetSectionId = link.getAttribute("href").substring(1);

        // Scroll to the target section using smooth scrolling
        document.getElementById(targetSectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sidebarLinks = document.querySelectorAll(".sidebar a");
sidebarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        // Prevent the default behavior of the anchor link
        event.preventDefault();

        // Close the sidebar
        onHide();

        // Get the target section ID from the href attribute
        const targetSectionId = link.getAttribute("href").substring(1);

        // Scroll to the target section using smooth scrolling
        document.getElementById(targetSectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});