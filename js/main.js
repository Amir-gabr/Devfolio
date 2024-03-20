//
//
(function () {
  ("use strict");


    // Easy selector helper function
  
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };


    // Easy event listener function

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };


    // Easy on scroll event listener

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };


  //=========   sticky  header     ============//
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

    // Back to top button

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }


    // Mobile nav toggle
 
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar-nav").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });


    // Mobile nav dropdowns activate

  on(
    "click",
    ".navbar-nav .dropdown > a",
    function (e) {
      if (select("#navbar-nav").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  
  //  Scrool with ofset on links with a class name .scrollto

  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar-nav");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );


    // Scroll with ofset on page load with hash links in the url

  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  
   //Intro type effect
  let typed = new Typed("#typed", {
    strings: ["Designer", "Developer", "Freelancer"],
    typeSpeed: 70,
    loop: true,
    loopCount: Infinity,
    backSpeed: 70,
    backDelay: 1000,
  });


  
  //  Initiate portfolio lightbox
  
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });


    // Testimonials slider
   

    // Preloader
   
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  
    // Initiate Pure Counter
   
  new PureCounter();
})();
