/* Global Styles & Variables */
:root {
    --primary-blue: #007bff;
    --secondary-green: #28a745;
    --dark-charcoal: #343a40;
    --medium-gray: #6c757d;
    --light-bg: #f8f9fa;
    --white: #ffffff;
    --border-color: #dee2e6;
    --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);

    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Open Sans', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    line-height: 1.6;
    color: var(--dark-charcoal);
    background-color: var(--white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--dark-charcoal);
    margin-bottom: 1rem;
}

h1 { font-size: 2.8rem; }
h2 { font-size: 2.2rem; }
h3 { font-size: 1.8rem; }

/* Links */
a {
    color: var(--primary-blue);
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: var(--secondary-green);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    border-radius: 5px;
    font-weight: 600;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--primary-blue);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #0056b3; /* Darker shade of primary blue */
    transform: translateY(-2px);
}

.btn-secondary {
    background-color: var(--white);
    color: var(--primary-blue);
    border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
    background-color: var(--primary-blue);
    color: var(--white);
    transform: translateY(-2px);
}

/* Header & Navigation */
.main-header {
    background-color: var(--white);
    padding: 1rem 0;
    box-shadow: var(--box-shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-charcoal);
}

.logo span {
    color: var(--primary-blue);
}

.nav-menu {
    list-style: none;
    display: flex;
}

.nav-menu li {
    margin-left: 30px;
}

.nav-menu a {
    font-weight: 600;
    color: var(--dark-charcoal);
    padding: 5px 0;
    position: relative;
}

.nav-menu a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: var(--primary-blue);
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
    width: 100%;
}

.nav-toggle {
    display: none; /* Hidden on desktop */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative; /* For animation */
    z-index: 1100; /* Ensure it's above menu when open */
}

.hamburger {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--dark-charcoal);
    position: relative;
    transition: background-color 0.3s ease;
}

.hamburger::before,
.hamburger::after {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--dark-charcoal);
    position: absolute;
    transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;
}

.hamburger::before {
    top: -8px;
}

.hamburger::after {
    top: 8px;
}

/* Animation for hamburger menu */
.nav-toggle.open .hamburger {
    background-color: transparent;
}

.nav-toggle.open .hamburger::before {
    transform: translateY(8px) rotate(45deg);
}

.nav-toggle.open .hamburger::after {
    transform: translateY(-8px) rotate(-45deg);
}


/* Hero Section (Homepage) */
.hero-section {
    background-color: var(--light-bg);
    padding: 80px 0;
    text-align: center;
    overflow: hidden;
}

.hero-section .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}

.hero-content {
    flex: 1;
    min-width: 300px;
    text-align: left;
}

.hero-content h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 15px;
    color: var(--dark-charcoal);
}

.hero-content p {
    font-size: 1.2rem;
    color: var(--medium-gray);
    margin-bottom: 30px;
}

.hero-ctas .btn {
    margin-right: 15px;
    margin-bottom: 10px;
}

.hero-image {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.hero-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
}

/* Sections General Styling */
section {
    padding: 80px 0;
    text-align: center;
}

section:nth-of-type(odd):not(.page-hero) { /* Exclude page-hero from alternating background for consistency */
    background-color: var(--light-bg);
}

section h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    position: relative;
    display: inline-block;
}

section h2::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: var(--primary-blue);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

/* Services Section (Homepage Grid) */
.service-grid, .reason-grid, .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.service-item, .reason-item, .portfolio-item {
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover, .reason-item:hover, .portfolio-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}

.service-item i, .reason-item i {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 15px;
}

.service-item h3, .reason-item h3, .portfolio-item h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.service-item p, .reason-item p, .portfolio-item p {
    font-size: 1rem;
    color: var(--medium-gray);
}

/* Call to Action Banner */
.cta-banner {
    background-color: var(--primary-blue);
    color: var(--white);
    padding: 40px 20px;
    border-radius: 8px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.cta-banner p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.cta-banner .btn {
    background-color: var(--secondary-green);
    color: var(--white);
    border: none;
}

.cta-banner .btn:hover {
    background-color: #218838; /* Darker green */
}

/* Portfolio Section */
.portfolio-item img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
}

/* Testimonials Section */
.testimonials-section {
    background-color: var(--light-bg);
}

.testimonial-carousel {
    display: flex;
    overflow-x: auto; /* Allows horizontal scrolling for now, JS will control later */
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 30px;
    padding-bottom: 20px; /* Space for scrollbar */
}

.testimonial-item {
    flex: 0 0 100%; /* Each item takes full width of container */
    scroll-snap-align: start;
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    text-align: center;
    min-width: 280px; /* Ensure a minimum width */
}

.testimonial-item p {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: var(--dark-charcoal);
}

.testimonial-item cite {
    display: block;
    font-weight: 600;
    color: var(--primary-blue);
    margin-top: 10px;
}

.carousel-nav {
    margin-top: 30px;
}

.carousel-nav button {
    background-color: var(--primary-blue);
    color: var(--white);
    border: none;
    padding: 10px 15px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 10px;
    transition: background-color 0.3s ease;
}

.carousel-nav button:hover {
    background-color: #0056b3;
}

/* Contact Section (Homepage - condensed version) */
.contact-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    text-align: left;
}

.contact-form-container, .contact-details {
    padding: 30px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
}

.contact-form .form-group {
    margin-bottom: 20px;
}

.contact-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-charcoal);
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form input[type="subject"], /* Added for contact page */
.contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: var(--primary-blue);
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05); /* subtle focus ring */
}

.contact-details p {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.contact-details p i {
    color: var(--primary-blue);
    font-size: 1.2rem;
}

.map-placeholder {
    margin-top: 20px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
}

.map-placeholder iframe {
    width: 100%;
    height: 250px;
    border: 0;
}

/* Footer */
.main-footer {
    background-color: var(--dark-charcoal);
    color: var(--white);
    padding: 40px 0;
    text-align: center;
    font-size: 0.9rem;
}

.main-footer .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.footer-nav {
    display: flex;
    gap: 20px;
}

.footer-nav a {
    color: var(--white);
    opacity: 0.8;
}

.footer-nav a:hover {
    color: var(--primary-blue);
    opacity: 1;
}

.social-icons a {
    color: var(--white);
    font-size: 1.5rem;
    margin: 0 10px;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: var(--primary-blue);
}

/* --- Pages Specific Styles (Integrated) --- */

/* Page Hero Section (can be used for any internal page header) */
.page-hero {
    background-color: var(--primary-blue);
    color: var(--white);
    padding: 60px 0;
    text-align: center;
    box-shadow: var(--box-shadow);
}

.page-hero h1 {
    color: var(--white);
    font-size: 3rem;
    margin-bottom: 15px;
}

.page-hero p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
}

/* Service Detail Sections & About Sections (similar two-column layouts) */
.service-detail-section, .about-section {
    padding: 80px 0; /* Consistent section padding */
}

.service-detail-section .container, .about-section .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;
    text-align: left;
}

.service-detail-section:nth-of-type(even) .container, .about-section:nth-of-type(even) .container {
    flex-direction: row-reverse;
}

.service-content-block, .about-content-block {
    flex: 1;
    min-width: 300px;
    max-width: 600px;
}

.service-content-block .service-icon, .about-content-block .about-icon { /* Reusing icon style (though not directly used in HTML for about-content-block currently) */
    font-size: 4rem;
    color: var(--primary-blue);
    margin-bottom: 20px;
    text-align: center;
}

.service-content-block h2, .about-content-block h2 {
    /* Adjusted to directly use the main section h2 style for consistency */
    font-size: 2.5rem; /* Matches main section h2 */
    margin-bottom: 40px; /* Matches main section h2 */
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.service-content-block h2::after, .about-content-block h2::after {
    /* Reusing the underline style */
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: var(--primary-blue);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

.service-content-block p, .about-content-block p {
    font-size: 1.1rem;
    margin-bottom: 25px;
    color: var(--dark-charcoal);
}

.service-content-block ul, .values-list {
    list-style: none;
    padding: 0;
}

.service-content-block ul li, .values-list li {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 1rem;
    color: var(--medium-gray);
    line-height: 1.4;
}

.service-content-block ul li i, .values-list li i {
    color: var(--secondary-green);
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-top: 4px;
}

.service-image, .about-image {
    flex: 1;
    min-width: 300px;
    max-width: 500px;
    text-align: center;
}

.service-image img, .about-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
}

.light-bg-section {
    background-color: var(--light-bg);
}

/* Team Section (About Us Page) */
.team-section {
    padding: 80px 0;
    background-color: var(--white);
}

.team-section .section-description {
    font-size: 1.1rem;
    color: var(--medium-gray);
    max-width: 700px;
    margin: -30px auto 60px auto;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
    /* margin-top will be handled by section-description margin */
}

.team-member {
    background-color: var(--light-bg); /* Use light-bg for subtle contrast */
    padding: 25px;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
}

.team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    border: 4px solid var(--primary-blue);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.05);
}

.team-member h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
}

.team-member .team-title {
    font-size: 0.95rem;
    color: var(--medium-gray);
    margin-bottom: 15px;
}

.team-social a {
    font-size: 1.2rem;
    color: var(--primary-blue);
    margin: 0 8px;
    transition: color 0.3s ease;
}

.team-social a:hover {
    color: var(--secondary-green);
}

/* Contact Us Full Page Styling */
.contact-full-section {
    padding: 80px 0;
    background-color: var(--white);
}

.contact-full-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 50px;
    margin-top: 40px;
    text-align: left;
}

.contact-full-grid .contact-form-container,
.contact-full-grid .contact-details-block {
    padding: 35px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
}

.contact-full-grid h2 {
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.contact-full-grid h2::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background-color: var(--primary-blue);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}

.contact-details-block p {
    margin-bottom: 20px;
    font-size: 1.05rem;
    color: var(--dark-charcoal);
}

.contact-details-block .detail-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 25px;
}

.contact-details-block .detail-item i {
    font-size: 2rem;
    color: var(--primary-blue);
    flex-shrink: 0;
}

.contact-details-block .detail-item h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
    color: var(--dark-charcoal);
}

.contact-details-block .detail-item p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.4;
}

.contact-details-block .map-placeholder {
    margin-top: 30px;
}

/* Responsive Design */
@media (max-width: 992px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.6rem; }

    .hero-content h1 {
        font-size: 2.8rem;
    }

    .nav-menu {
        margin-left: auto;
    }

    .page-hero h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .main-header .navbar {
        flex-wrap: wrap;
    }

    .nav-menu {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: var(--white);
        box-shadow: var(--box-shadow);
        padding: 20px 0;
        margin-top: 15px;
        position: absolute;
        top: 100%;
        left: 0;
        border-top: 1px solid var(--border-color);
    }

    .nav-menu.active {
        display: flex;
    }

    .nav-menu li {
        margin: 10px 0;
        text-align: center;
    }

    .nav-toggle {
        display: block;
        order: 2;
    }

    .logo {
        order: 1;
    }

    .hero-section .container {
        flex-direction: column;
        text-align: center;
    }

    .hero-content, .hero-image {
        min-width: unset;
        width: 100%;
        text-align: center;
    }

    .hero-ctas {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .hero-ctas .btn {
        margin-right: 0;
        width: 80%;
    }

    h1 {
        font-size: 2.2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    .service-grid, .reason-grid, .portfolio-grid, .contact-grid, .team-grid, .contact-full-grid {
        grid-template-columns: 1fr;
    }

    .main-footer .container {
        flex-direction: column;
        text-align: center;
    }

    .footer-nav {
        flex-direction: column;
        gap: 10px;
    }

    .social-icons {
        margin-top: 20px;
    }

    /* Page Specific Mobile Adjustments */
    .page-hero h1 {
        font-size: 2.2rem;
    }

    .service-detail-section .container, .about-section .container {
        flex-direction: column;
        text-align: center;
    }

    .service-detail-section:nth-of-type(even) .container, .about-section:nth-of-type(even) .container {
        flex-direction: column;
    }

    .service-content-block, .service-image, .about-content-block, .about-image {
        min-width: unset;
        width: 100%;
    }

    .service-content-block h2, .about-content-block h2,
    .service-content-block .service-icon, .about-content-block .about-icon {
        text-align: center;
        left: unset;
        transform: unset;
    }
    .service-content-block h2::after, .about-content-block h2::after {
        left: 50%;
        transform: translateX(-50%);
    }

    .service-content-block ul, .values-list {
        width: 90%;
        margin: 0 auto;
    }
    .service-content-block ul li, .values-list li {
        justify-content: flex-start;
        text-align: left;
    }

    .team-member {
        padding: 20px;
    }
    .team-section .section-description {
        margin: -20px auto 40px auto; /* Adjust for mobile spacing */
    }

    .contact-full-grid .contact-form-container,
    .contact-full-grid .contact-details-block {
        padding: 30px;
    }

    .contact-full-grid h2 {
        left: unset;
        transform: unset;
    }
    .contact-full-grid h2::after {
        left: 50%;
        transform: translateX(-50%);
    }

    .contact-details-block .detail-item {
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    .contact-details-block .detail-item i {
        margin-bottom: 10px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.6rem;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }

    .page-hero h1 {
        font-size: 1.8rem;
    }
}
