document.addEventListener("DOMContentLoaded", () => {

    const featuresSection = document.querySelector("#features");
    const processSection  = document.querySelector("#process");

    const featuresLabel = document.querySelector("#features-label");
    const processLabel  = document.querySelector("#process-label");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            if (id === "features") {
                entry.isIntersecting
                    ? featuresLabel.classList.add("active-label")
                    : featuresLabel.classList.remove("active-label");
            }

            if (id === "process") {
                entry.isIntersecting
                    ? processLabel.classList.add("active-label")
                    : processLabel.classList.remove("active-label");
            }
        });
    }, { threshold: 0.6 });

    observer.observe(featuresSection);
    observer.observe(processSection);
});

