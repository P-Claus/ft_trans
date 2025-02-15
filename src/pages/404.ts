
export const render404 = (): string => 
{
  return `
  <section class="bg-hero-pattern text-white">
	<div class="container px-5 md:px-10 h-screen">
	<div class="flex flex-col items-center">
			<img class="h-60 mt-20" src="/404.png"></img>
            <p class="mt-5">Oops! The page you are looking for doesn't exist.</p>
            <a class="text-xl md:text-base text-white bg-primary my-3 py-3 px-6 rounded-md flex items-center whitespace-nowrap hover:text-primary hover:bg-white" href="/" data-link><button>Go Home</button></a>
		</div>
	</div>
  </section>
  `;
}
