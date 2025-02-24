import { emailValidation, registerPasswordValidation, passwordValidation, usernameValidation } from './dataValidation.ts'

export const attachRegisterPageEventListeners = () => {

	console.log("Started looking for the form...");

	const form = document.getElementById("registerForm") as HTMLFormElement;

	if (!form) {
		console.log("The form is not found so skipping the eventlistener");
		return;
	}

	console.log("The form as been found and adding eventlistener");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		console.log("Form submitted");
		const email = (document.getElementById("email") as HTMLInputElement).value;
		const password = (document.getElementById("password") as HTMLInputElement).value;
		const passwordConfirmation = (document.getElementById("passwordConfirmation") as HTMLInputElement).value;
		const username = (document.getElementById("username") as HTMLInputElement).value;

		console.log("Collected data: ", { email, username, password, passwordConfirmation });

		emailValidation(email);
		registerPasswordValidation(password, passwordConfirmation);
		usernameValidation(username);
	})
}
export const attachLoginPageEventListeners = () => {

	console.log("Started looking for the form...");

	const form = document.getElementById("loginForm") as HTMLFormElement;

	if (!form) {
		console.log("The form is not found so skipping the eventlistener");
		return;
	}

	console.log("The form as been found and adding eventlistener");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		console.log("Form submitted");
		const email = (document.getElementById("email") as HTMLInputElement).value;
		const password = (document.getElementById("password") as HTMLInputElement).value;

		console.log("Collected data: ", { email, password });

		emailValidation(email);
		passwordValidation(password);
	})
}

export const attachNavbarEventListeners = () => {
	console.log("Started looking for the navbar...");

	const mobileMenuButton = document.querySelector(".mobile-menu-button");
	const mobileMenu = document.querySelector(".navigation-menu");

	const path = window.location.pathname.substring(1);

	const dashboardTitle = document.getElementById("dashboard-title");
	if (dashboardTitle)
		dashboardTitle.innerHTML = path[0].toUpperCase() + path.slice(1);

	console.log("Attaching the eventlistener to the nav menu");
	if (mobileMenuButton)
		mobileMenuButton.addEventListener("click", () => {
			if (mobileMenu)
				mobileMenu.classList.toggle("hidden");
		})
}
