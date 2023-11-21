
function openCurriculumVitae() {
    var curriculumVitaeLink = "https://drive.google.com/uc?export=view&id=1MGRopUC4w1P5LGR_-M-Gi-NaWxCQdWlH";
    window.open(curriculumVitaeLink, '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get all the elements you want to animate
    const animatedElements = document.querySelectorAll(".animated");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll events
    function handleScroll() {
        animatedElements.forEach(function (element) {
            if (isInViewport(element)) {
                element.classList.add("in-viewport");
            } else {
                element.classList.remove("in-viewport");
            }
        });
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
});
