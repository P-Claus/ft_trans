import { renderLoggedInNavBar } from "../components/LoggedInNavBar";
import { renderFooter } from "../components/Footer";

export const renderStats= (): string => 
{
  return `
  	${renderLoggedInNavBar()}
    <section class="bg-primary-background text-white">
		<div class="container px-5 md:px-10 flex flex-col items-center">
			<h2 class="text-center font-Roboto text-4xl pt-24 pb-16">Stats</h2>
			<img src="/stats-bg.png" class="pt-20 pb-20 max-w-xl"/>
		</div>
    </section>
	${renderFooter()}
  `;
}
