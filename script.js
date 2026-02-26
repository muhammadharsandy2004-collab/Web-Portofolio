document.addEventListener("DOMContentLoaded", function () {

    /* ================= CONTACT CARD ================= */

    const contactBtn = document.getElementById("contactBtn");
    const contactCard = document.getElementById("contactCard");
    const closeBtn = document.getElementById("closeBtn");

    if (contactBtn && contactCard && closeBtn) {
        contactBtn.addEventListener("click", () => {
            contactCard.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            contactCard.classList.remove("active");
        });
    }

    /* ================= IMAGE MODAL ================= */

    window.openImage = function (imageName) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImg");

        if (modal && modalImg) {
            modal.style.display = "flex";
            modalImg.src = imageName;
        }
    };

    window.closeImage = function () {
        const modal = document.getElementById("imageModal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ================= NAVBAR + ACTIVE LINK + REVEAL ================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const revealElements = document.querySelectorAll(".section");
    const navbar = document.querySelector(".navbar");

    function handleScroll() {

        let current = "";
        const scrollY = window.scrollY;

        // Active nav link
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });

        // Reveal animation
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("show");
            }
        });

        // Navbar background
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    /* ================= CONTACT FORM ================= */

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const message = form.querySelector("textarea").value.trim();

            if (!name || !email || !message) {
                alert("Semua field wajib diisi.");
                return;
            }

            alert("Pesan berhasil dikirim!");
            form.reset();
        });
    }

});

const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroImage.classList.add("visible");
            } else {
                heroImage.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.4
    });

    observer.observe(heroImage);
}