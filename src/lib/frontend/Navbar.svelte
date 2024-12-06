<script>
	import Modetoggle from './Modetoggle.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import { buttonVariants } from '$lib/components/ui/button';
	import Menu from 'lucide-svelte/icons/menu';
</script>

<header
	class="sticky top-0 z-50 flex w-full flex-wrap py-3 text-sm backdrop-blur-md sm:flex-nowrap sm:justify-start"
	id="kutton"
>
	<nav class="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between">
		<div class="flex items-center justify-between">
			<a
				class="flex-none text-xl font-semibold focus:opacity-80 focus:outline-none dark:text-white"
				href="/"
				aria-label="Brand"
			>
				<img
					class="size-16"
					src="https://www.undp.org/sites/g/files/zskgke326/files/2022-04/undp-logo-blue.svg"
					alt="undp"
				/>
			</a>
			<div class="sm:hidden">
				<Sheet.Root>
					<Sheet.Trigger class={buttonVariants({ variant: 'secondary', size: 'icon' })}>
						<Menu />
					</Sheet.Trigger>
					<Sheet.Content side="left">
						<Sheet.Header>
							<div class="grid gap-2">
								<a
									class="text-start font-medium text-blue-500 focus:outline-none"
									href="/"
									aria-current="page">About</a
								>
								<a
									class="text-start font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
									href="/questionnaire">Questionnaire</a
								>
							</div>
						</Sheet.Header>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
		<div
			id="hs-navbar-example"
			class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
			aria-labelledby="hs-navbar-example-collapse"
		>
			<div
				class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:ps-5"
			>
				<a class="font-medium text-blue-500 focus:outline-none" href="/" aria-current="page"
					>About</a
				>
				<a
					class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
					href="/questionnaire">Questionnaire</a
				>
				<a
					class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
					href="##">Work</a
				>
				<Modetoggle />
			</div>
		</div>
	</nav>
</header>

<style>
	@media print {
		@page {
			size: auto; /* auto is the initial value */
			margin: 0; /* this affects the margin in the printer settings */
		}
		#kutton {
			visibility: hidden;
		}
	}
</style>
