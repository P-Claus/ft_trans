import { renderLoggedInNavBar } from "../components/LoggedInNavBar";
import { renderFooter } from "../components/Footer";

export const renderPofile= (): string => 
{
  return `
  	${renderLoggedInNavBar()}
    <section class="bg-primary-background text-white">
		<div class="container md:px-10 flex flex-col items-center gap-6 pb-32">
			<div class="border border-primary-faded rounded-md w-full p-16 flex items-center flex-col max-w-full mt-16">
				<img src="/avatar.png"/>
				<h3 class="mt-8 text-2xl">username</h3>
			</div>
			<div class="border border-primary-faded rounded-md p-16 w-full flex flex-col items-center max-w-full">
					<form class="flex flex-col gap-3 mt-4 w-72" id="registerForm">
						<label for="email">Email</label>
						<input class="h-10 rounded text-black px-4" type="email" id="email" name="email" placeholder="name@example.com">
						<button type="submit" class=" mt-10 text-xl md:text-base text-white bg-primary my-8 py-3 px-6 rounded-md flex items-center whitespace-nowrap hover:text-primary hover:bg-white w-full h-10 justify-center">Update profile</button>
					</form>
			</div>
		</div>
    </section>
	${renderFooter()}
  `;
}
