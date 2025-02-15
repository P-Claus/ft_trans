import { renderHomePage } from "./pages/HomePage";
import { renderCookiePolicy } from "./pages/CookiePolicy";
import { render404 } from "./pages/404";

const routes: { [key: string]: () => string } =
{
	"/": renderHomePage,
	"/cookie-policy": renderCookiePolicy,

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
};

window.addEventListener("popstate", router);
