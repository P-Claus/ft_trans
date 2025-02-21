import { renderHomePage } from "./pages/HomePage";
import { renderCookiePolicy } from "./pages/CookiePolicy";
import { renderTermsAndConditions } from "./pages/TermsConditions"
import { renderPrivacyPolicy } from "./pages/PrivacyPolicy"
import { render404 } from "./pages/404";
import { renderLogin } from "./pages/Login"
import { renderRegister } from "./pages/Register"
import { renderBackend } from "./pages/Backend";
import { attachLoginPageEventListeners, attachRegisterPageEventListeners } from "../tools/EventListeners";

const routes: { [key: string]: () => string } =
{
	"/": renderHomePage,
	"/cookie-policy": renderCookiePolicy,
	"/terms-conditions": renderTermsAndConditions,
	"/privacy-policy": renderPrivacyPolicy,
	"/login": renderLogin,
	"/register": renderRegister, 
	"/backend": renderBackend,

};

export const navigateTo = (url: string) =>
{
	history.pushState({}, "", url);
	router();
};

export const router = () =>
{
	const path = window.location.pathname;

	const app = document.getElementById("app");
	if (!app)
	{
		console.error("ERROR: <div id='app'> NOT FOUND!");
		return;
	}

	const page = routes[path] ? routes[path]() : render404();
	app.innerHTML = page;

	if (path === "/register")
		attachRegisterPageEventListeners();
	if (path === "/login")
		attachLoginPageEventListeners();

};

window.addEventListener("popstate", router);
