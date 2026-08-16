/* =========================================================
   ALMA — JAVASCRIPT
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1700);

});


/* =========================================================
   HEADER
========================================================= */

const header = document.querySelector(".header");

function handleHeader() {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleHeader);

handleHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    mobileMenu.classList.toggle("open");

    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("active");

        mobileMenu.classList.remove("open");

        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();

        const target = document.querySelector(targetId);

        const offset = 70;

        const position =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({

            top: position,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PORTFOLIO FILTER
========================================================= */

const filters =
    document.querySelectorAll(".filter");

const galleryItems =
    document.querySelectorAll(".gallery-item");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(button => {

            button.classList.remove("active");

        });

        filter.classList.add("active");

        const selected =
            filter.dataset.filter;


        galleryItems.forEach(item => {

            if (selected === "all") {

                item.classList.remove("hidden");

                return;

            }

            if (item.classList.contains(selected)) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor");


if (window.innerWidth > 850) {

    document.addEventListener("mousemove", event => {

        cursor.style.left =
            `${event.clientX}px`;

        cursor.style.top =
            `${event.clientY}px`;

    });


    const interactiveElements =
        document.querySelectorAll(
            "a, button, .gallery-item, .service-card, .package"
        );


    interactiveElements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.classList.add("big");

        });

        element.addEventListener("mouseleave", () => {

            cursor.classList.remove("big");

        });

    });

}


/* =========================================================
   PARALLAX HERO
========================================================= */

const heroImage =
    document.querySelector(".hero-background img");


window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scroll =
        window.scrollY;

    if (scroll < window.innerHeight) {

        heroImage.style.transform =
            `scale(1) translateY(${scroll * 0.12}px)`;

    }

});


/* =========================================================
   3D TILT — PORTFOLIO
========================================================= */

const cards =
    document.querySelectorAll(".gallery-item");


if (window.innerWidth > 1000) {

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -1.5;

            const rotateY =
                ((x - centerX) / centerX) * 1.5;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.005)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) scale(1)";

        });

    });

}


/* =========================================================
   ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const id =
                    entry.target.getAttribute("id");

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${id}`
                    ) {

                        link.classList.add("active");

                    }

                });

            });

        },

        {
            rootMargin: "-35% 0px -60% 0px"
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   IMAGE LOADING EFFECT
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(img => {

    img.addEventListener("load", () => {

        img.classList.add("loaded");

    });

});


/* =========================================================
   PREVENT BROKEN # LINKS
========================================================= */

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});


/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "%c ALMA. ",
    "background:#111;color:#fff;padding:10px;font-size:20px;"
);

console.log(
    "Photography · Storymaker · Mobile Video"
);