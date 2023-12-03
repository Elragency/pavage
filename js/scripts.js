/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

// document.addEventListener('DOMContentLoaded', () => {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.querySelector('#navbarResponsive');
  
//     navbarToggler.addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent default anchor behavior
//       navbarCollapse.classList.toggle('show');
//     });
  
//     // Modify the event listener to ignore dropdowns
//     const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
//     navLinks.forEach(link => {
//       link.addEventListener('click', function (e) {
//         // Close navbar only if the clicked link is not a dropdown toggle
//         if (!this.classList.contains('dropdown-toggle') && navbarCollapse.classList.contains('show')) {
//           navbarCollapse.classList.remove('show');
//         }
//       });
//     });

//         // Shrink the navbar when page is scrolled
//         document.addEventListener('scroll', navbarShrink);
  
//     // Special handling for dropdown toggles
//     const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
//     dropdownToggles.forEach(dropdownToggle => {
//       dropdownToggle.addEventListener('click', function (e) {
//         e.stopPropagation(); // Prevent the event from closing the navbar
//       });
//     });
//   });
  
// document.addEventListener('DOMContentLoaded', () => {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const navbarCollapse = document.querySelector('#navbarResponsive');
  
//     navbarToggler.addEventListener('click', function (event) {
//       event.preventDefault(); // Prevent default anchor behavior
//       const isCollapsed = !navbarCollapse.classList.contains('show');
//       navbarCollapse.classList.toggle('show', isCollapsed);
//     });
  
//     const navLinks = document.querySelectorAll('#navbarResponsive .nav-link:not(.dropdown-toggle)');
//     navLinks.forEach(link => {
//       link.addEventListener('click', function () {
//         if (navbarCollapse.classList.contains('show')) {
//           navbarCollapse.classList.remove('show');
//         }
//       });
//     });
  
//     // Special handling for dropdown toggles
//     const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
//     dropdownToggles.forEach(dropdownToggle => {
//       dropdownToggle.addEventListener('click', function (e) {
//         e.stopPropagation(); // Prevent the event from closing the navbar
//       });
//     });
//   });
  

// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#mainNav');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };


//         // Activate Bootstrap scrollspy on the main nav element
//         const mainNav = document.body.querySelector('#mainNav');
//         if (mainNav) {
//             new bootstrap.ScrollSpy(document.body, {
//                 target: '#mainNav',
//                 rootMargin: '0px 0px -40%',
//             });
//         };
//         window.addEventListener('DOMContentLoaded', event => {

//             // Navbar shrink function
//             var navbarShrink = function () {
//                 const navbarCollapsible = document.body.querySelector('#mainNav');
//                 if (!navbarCollapsible) {
//                     return;
//                 }
//                 if (window.scrollY === 0) {
//                     navbarCollapsible.classList.remove('navbar-shrink')
//                 } else {
//                     navbarCollapsible.classList.add('navbar-shrink')
//                 }
        
//             };
        


/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));

    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            // Check if the nav item is not a dropdown toggle
            if (!responsiveNavItem.classList.contains('dropdown-toggle') && window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
