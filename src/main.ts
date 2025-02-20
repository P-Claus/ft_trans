import './style.css'
import { router, navigateTo } from './router'

document.addEventListener("DOMContentLoaded", () => {
	router();
});

document.body.addEventListener("click", (event) => {
	const target = (event.target as HTMLElement).closest("a[data-link]");
	if (target && target instanceof HTMLAnchorElement)
	{
		console.log("A link was clicked");
		event.preventDefault();
		navigateTo(target.getAttribute("href")!);
	}
});
