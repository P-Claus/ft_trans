export function renderFriends(): string {
    return `
		<div class="border border-gray-800 py-3 px-3 rounded-xl grid-cols-5 grid mt-2">
			<div class="flex gap-2 items-center col-span-2">
				<img src="./avatar.png" class="h-12"></img>
				<h2 class="font-light">John Doe</h2>
			</div>
			<div class="flex items-center gap-1">			
				<img src="./online.png" class="h-4"></img>
				<p class="font-thin">Online</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./trophy-friends.png" class="h-4"></img>
				<p class="font-thin">10 wins</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./game-controller.png" class="h-4"></img>
				<p class="font-thin">23 games</p>
			</div>
		</div>
		<div class="border border-gray-800 py-3 px-3 rounded-xl grid-cols-5 grid mt-2">
			<div class="flex gap-2 items-center col-span-2">
				<img src="./avatar.png" class="h-12"></img>
				<h2 class="font-light">Jack Sparrow</h2>
			</div>
			<div class="flex items-center gap-1">			
				<img src="./offline.png" class="h-4"></img>
				<p class="font-thin">Offline</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./trophy-friends.png" class="h-4"></img>
				<p class="font-thin">2 wins</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./game-controller.png" class="h-4"></img>
				<p class="font-thin">7 games</p>
			</div>
		</div>
  `;
}
