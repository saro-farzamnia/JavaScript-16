    // // Event 

// const button = document.querySelector("button");

// const buttonHandler = () => {
//   console.log("Button clicked");
// };
// button.addEventListener("click", buttonHandler);

// const input = document.querySelector("input");
// const inputHandler = () => {
//     console.log("Input");
// };
// input.addEventListener("change", inputHandler);
// input.addEventListener("focus", inputHandler);

// const windowHandler = () => {
//     console.log("resize");
// };
// window.addEventListener("resize", windowHandler);
// window.addEventListener("load", windowHandler);

// const button = document.querySelector("button");
// const buttonHandler = (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.innerText);

//     console.log(event);
//     console.log(event.key);
// };
// button.addEventListener("click", buttonHandler);
// button.addEventListener("keydown", buttonHandler);

    // // prevendDefault()
// const form = document.querySelector("form");

// const formHandler = (event) => {
//     console.log(event);
//     event.preventDefault();
//     console.log(event);
// };

// //or

// const formHandler = (e) => {
//     console.log(event);
//     e.preventDefault();
//     console.log(e);
// };
// form.addEventListener("submit", formHandler);

    // // stopPropagation
// const div = document.querySelector("div");
// const button = document.querySelector("button");

// const showHandler = (event) => {
//     event.stopPropagation();
//     console.log("button");
// };

// const divHandler = (event) => {
//     console.log("div");
// };
// button.addEventListener("click", showHandler);
// div.addEventListener("click", divHandler);

    // // Remove Event

// const div = document.querySelector("div");
// const button = document.querySelector("button");
// const showHandler = (event) => {
//     event.stopPropagation();
//     console.log("button clicked");
// };

// const divHandler = (event) => {
//     console.log("div clicked");
//     button.removeEventListener("click", showHandler);
// };
// button.addEventListener("click", showHandler);
// div.addEventListener("click", divHandler);

    // // Dataset -- form more information

// const h1 = document.querySelector("h1");
// console.log(h1);
// console.dir(h1);
// h1.dataset.lastName="Farzamnia";
// console.dir(h1);

    // // BOM
    // //( BOM => Brower Object Model زیر مجموعه های)

//window
// console.log("outerHeight", window.outerHeight);
// console.log("outerWidth", window.outerWidth);

// console.log("innerHeight", window.innerHeight);
// console.log("innerWidth", window.innerWidth);

//screen
// console.log("high",screen.height);
// console.log("width",screen.width);

// Location
// console.log(location);
// location.assign("https://www.google.com");
// location.href = "https://www.google.com";
// location.replace("https://www.google.com");
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.reload());

//history
// console.log(history);
// history.back();
// history.forward();

// Navigator
// console.log(navigator);
// console.log(navigator.geolocation);
