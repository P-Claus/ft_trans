//import axios from 'axios'
import { renderNavBar } from '../components/NavBar'
import { renderFooter } from '../components/Footer'

// export const sendDataToBackend = async (email: string, password: string, username: string) => {
// 	const { data } = await axios.post('http://localhost:1919/register', {
// 			email, password, username
// 		}, {
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		}
// 	)
// 	console.log("The data is: ", data);
// 	return data;
// }

export const renderRegister = (): string => {
	return `
  	${renderNavBar()}
	  <section class="bg-hero-pattern text-white bg-cover bg-top w-full">
		<div class="container px-5 md:px-10 h-screen flex items-center justify-center">
			<div class="px-6 flex flex-col items-center bg-primary-background rounded-xl w-96">
					<img class="h-28 mt-10 mb-10" src="/pong-logo-1.svg"></img>
					<h2 class="mb-5 px-10 text-center">Enter your email and provide a password to create an account.</h2>
					<form class="flex flex-col gap-3 mt-4 w-72" id="registerForm">
						<label for="email">Email</label>
						<input class="h-10 rounded text-black" type="email" id="email" name="email">
						<label for="username">Username</label>
						<input class="h-10 rounded text-black" type="text" id="username" name="username">
						<label for="password">Password</label>
						<input class="h-10 rounded text-black" type="password" id="password" name="password">
						<label for="passwordConfirmation">Retype password</label>
						<input class="h-10 rounded text-black" type="password" id="passwordConfirmation" name="passwordConfirmation">
						<button type="submit" class=" mt-10 text-xl md:text-base text-white bg-primary my-8 py-3 px-6 rounded-md flex items-center whitespace-nowrap hover:text-primary hover:bg-white w-full h-10 justify-center">Register</button>
					</form>
					<p class="mb-10" data-link>Already have an account? Click <a class="underline text-primary pointer" href="/login" data-link>here</a> to login</p>
			</div>
		</div>
	  </section>
	${renderFooter()}
  `;
}

// export const sendDataToBackend = async (email: string, password: string, username: string) => {
