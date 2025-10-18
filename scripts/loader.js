window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');

    // Add the hidden class to fade out the loader
    loaderWrapper.classList.add('loader-hidden');

    // After the transition ends, set display to none so it doesn't take up space
    loaderWrapper.addEventListener('transitionend', function() {
        // We use .remove() to completely remove it from the page
        loaderWrapper.remove();
    });
});


// // Set the minimum display time in milliseconds (e.g., 2000ms = 2 seconds)
// // THIS IS THE VALUE YOU CAN CHANGE
// const MINIMUM_DISPLAY_TIME = 2000;

// // Promise 1: Resolves when the page is fully loaded
// const pageLoadPromise = new Promise(resolve => {
//     window.addEventListener('load', resolve);
// });

// // Promise 2: Resolves after the minimum time has passed
// const timerPromise = new Promise(resolve => {
//     setTimeout(resolve, MINIMUM_DISPLAY_TIME);
// });

// // Wait for BOTH promises to complete before hiding the loader
// Promise.all([pageLoadPromise, timerPromise]).then(() => {
//     const loaderWrapper = document.getElementById('loader-wrapper');

//     // Add the class to trigger the fade-out animation
//     loaderWrapper.classList.add('loader-hidden');

//     // Remove the loader from the page completely after the animation finishes
//     loaderWrapper.addEventListener('transitionend', function() {
//         loaderWrapper.remove(); 
//     });
// });