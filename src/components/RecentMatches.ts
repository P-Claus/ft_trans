export function renderRecentMatches(): string {
    return `
		<div class="border border-green-600 py-3 px-3 rounded-xl grid-cols-3 grid mt-2">
			<div class="flex gap-2 items-center">
				<h2 class="text-3xl">WIN</h2>
			</div>
			<div class="flex items-center gap-1">
				<img src="./vs.png" class="h-4"></img>
				<p class="font-thin">Bootstrap Bill</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./calendar.png" class="h-4"></img>
				<p class="font-thin">19/2/2025</p>
			</div>
		</div>
		<div class="border border-red-500 py-3 px-3 rounded-xl grid-cols-3 grid mt-2">
			<div class="flex gap-2 items-center">
				<h2 class="text-3xl">LOSS</h2>
			</div>
			<div class="flex items-center gap-1">
				<img src="./vs.png" class="h-4"></img>
				<p class="font-thin">William Turner</p>
			</div>
			<div class="flex items-center gap-1">
				<img src="./calendar.png" class="h-4"></img>
				<p class="font-thin">18/2/2025</p>
			</div>
		</div>
  `;
}
