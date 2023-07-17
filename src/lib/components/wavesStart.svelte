<div class="spacer_start">
	<svg
		data-name="Layer 1"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
	>
		<path
			x="0"
			y="0"
			width="1000"
			height="100"
			d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
			class="transition-colors duration-200 ease-in-out dark:fill-white fill-dark-500"
		/>
	</svg>
</div>

<style>
	.spacer_start {
		position: absolute;
		top: 10;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		z-index: 0;
	}

	.spacer_start svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 115px;
	}

	@media (min-width: 3000px) {
		.spacer_start svg {
			width: calc(50% + 1000px);
			height: 150px;
		}
	}

	@media (min-width: 1536px) {
		.spacer_start svg {
			width: calc(90% + 1000px);
			height: 120px;
		}
	}

	@media (max-width: 640px) {
		.spacer_start svg {
			width: calc(150% + 1.3px);
			height: 110px;
		}
	}
	@media (max-width: 350px) {
		.spacer_start svg {
			width: calc(200% + 1.3px);
			height: 100px;
		}
	}
</style>
