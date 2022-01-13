"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.on("/").render("welcome");
// Route.get("/welcome", async ({ view }) => {
//   return view.render("welcome");
// });
Route.get("/", ({ view }) => {
  // This is the route for the home page
  return view.render("page/home");
});
Route.get("/personal", ({ view }) => {
  // this route should contain the linking to the personal
  // banking option
  return view.render("page/personal");
});
Route.get("/loans", ({ view }) => {
  // this link is for the loan option
  return view.render("page/loans");
});
Route.get("/investment", ({ view }) => {
  // this link is for the investment and crypto deposit
  // option
  return view.render("page/investment");
});
Route.get("/about", () => {
  // this link is for the about page
  return View.render("page/about");
});
Route.get("/terms", () => {
  // This page is for the terms and conditions
  return View.render("page/terms");
});
Route.get("/privacy", () => {
  // This page is for the terms and conditions
  return View.render("page/privacy");
});
// login and Signup get requests
Route.get("/signin", () => {
  return View.render("page/signin");
});
Route.get("/signup", () => {
  return View.render("page/signup");
});
