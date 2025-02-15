import { renderNavBar } from '../components/NavBar'
import { renderFooter } from '../components/Footer'

export const renderLogin= (): string => 
{
  return `
  	${renderNavBar()}
	  <section class="bg-hero-pattern text-white">
		<div class="container px-5 md:px-10 h-screen flex items-center justify-center">
			<div class="px-6 flex flex-col items-center bg-primary-background rounded-xl w-96">
					<img class="h-28 mt-10 mb-10" src="/pong-logo-1.svg"></img>
					<h2 class="mb-5">Enter your login details</h2>
					<form class="flex flex-col gap-2 mb-10 w-72">
						<label for="email">Email</label>
						<input class="h-8 rounded text-black" type="email" id="email" name="email">
						<label for="password">Password</label>
						<input class="h-8 rounded text-black" type="password" id="password" name="password">
					</form>
					<a class=" mt-5 text-xl md:text-base text-white bg-primary my-8 py-3 px-6 rounded-md flex items-center whitespace-nowrap hover:text-primary hover:bg-white"><button>Login</button></a>
			</div>
		</div>
	  </section>
	${renderFooter()}
  `;
}

