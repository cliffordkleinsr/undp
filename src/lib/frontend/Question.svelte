<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Textarea } from '$lib/components/ui/textarea';
	import type { ActiveTable } from 'active-table';
	// import { onMount, untrack } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import {
		coded_info,
		presence,
		cat_cust,
		cred_prod,
		rank_lon,
		rank_impo_indv,
		rank_imp_org,
		rank_imp_bin_lon,
		rank_imp_bin_lon_rej,
		rank_imp_sav,
		sav_prods,
		ins_prods
	} from './tabledata';

	const isDesktop = new MediaQuery('min-width: 768px');

	// stores
	let codedinfo = $state() as (string | number)[][] | undefined;

	let isLoaded = $state(false);
	let getInfo = $state() as (element: string) => Promise<any>;
	$effect(() => {
		(async () => {
			await import('active-table');
			isLoaded = true;
		})();

		getInfo = (element) => {
			let tableElementRef = document.getElementById(element) as any;
			let tableData: (string | number)[][];
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					if (tableElementRef) {
						tableData = tableElementRef.getData();
						console.log(tableData);
						resolve(tableData);
					} else {
						console.error('Table element not found.');
					}
				}, 10);
			});
		};
	});
</script>

<div class="m-5" id="questionnaire">
	<h1 class="text-center text-3xl font-semibold tracking-tight text-muted-foreground">
		Questionnaire
	</h1>
	<div
		class="mx-auto flex w-full max-w-4xl flex-col justify-center space-y-2 py-16 text-muted-foreground"
	>
		<div class="grid gap-2 py-10">
			<h1 class="text-2xl font-semibold tracking-tight">PART I: ORGANIZATION/GROUP BACKGROUND</h1>
			<Separator />
			<div class="grid gap-2 space-y-3">
				<h1 class="text-xl font-semibold tracking-tight">
					Coded information (Interviewer to complete)
				</h1>
				<Separator class="mb-2 w-96" />
				{#if isLoaded}
					<active-table
						id="codedinfo"
						maxColumns="3"
						data={coded_info}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="3"
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '500px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '500px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>
			<div class="grid max-w-2xl gap-2 py-5">
				<Label>1.1. Name of the organization or group</Label>
				<Input class="max-w-xs" />
			</div>
			<div class="grid gap-2 space-y-3 py-5">
				<Label>1.2. Please indicate the locations in which your organization has a presence</Label>
				{#if isLoaded}
					<active-table
						maxColumns="3"
						data={presence}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="5"
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '350px'
						}}
					></active-table>
				{/if}
			</div>
		</div>
		<div class="grid gap-3">
			<h1 class="text-2xl font-semibold tracking-tight">PART A: IDENTIFICATION AND ACCESS</h1>
			<Separator />

			<div class="grid max-w-2xl gap-2 py-5">
				<Label
					>1. What are your tiered KYC policies for access to finance, and do they apply to FDPs?</Label
				>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					2. Are there any specific policies that make it difficult for FDPs to access finance?
				</Label>
				<p class="text-sm italic">(If ‘NO’, Skip to Question 5)</p>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					3. Which government policies <span class="text-sm italic">(if any)</span> make it difficult
					for FDPs to access finance?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					4. Which organizational policies <span class="text-sm italic">(if any)</span> make it difficult
					for FDPs to access finance?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>5. Please indicate for each category of customers below, the percent that:</Label>
				{#if isLoaded}
					<active-table
						maxColumns="3"
						data={cat_cust}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="4"
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '500px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '500px' : '400px' }}
					></active-table>
				{/if}
			</div>
		</div>
		<div class="grid gap-3 py-10">
			<h1 class="text-2xl font-semibold tracking-tight">PART B. CREDIT PRODUCTS</h1>
			<Separator />

			<div class="grid gap-2 py-5">
				<Label>
					1. Does your organization (group) offer credit to FDPs and (or) host community families?
				</Label>
				<p class="text-sm italic">(If ‘NO’, Skip to Part C)</p>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. Please list all credit products your organization offers to FDPs and (or) host
					community families (including digital loans), within the table.
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={11}
						data={cred_prod}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						tableStyle={{ width: '900px' }}
						overflow={{ maxWidth: isDesktop.current ? '900px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					3. <span class="text-sm italic">(If any digital lending products are listed)</span> Do you
					provide digital loans to FDPs that do not have mobile phones registered in their own names?
				</Label>
				<Textarea />
				<Label>If so, please describe how this works</Label>
				<Textarea />
			</div>
			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. Please list all credit products your organization offers to FDPs and (or) host
					community families (including digital loans), within the table.
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={11}
						data={rank_lon}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={16}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '700px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '700px' : '400px' }}
					></active-table>
				{/if}
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>5. Do you lend to informal businesses?</Label>
				<Input />
				<Label class="text-sm italic">If ‘NO’, Why?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					6. Rank by order of importance (with ‘1’ most important), the purposes for which
					individuals take business loans
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={3}
						data={rank_impo_indv}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={6}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '450px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '450px' : '400px' }}
					></active-table>
				{/if}
				<Label>Are there any other purposes for which individuals take business loans?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					6. Rank by order of importance from 1 to 10 (with ‘1’ most important), the following
					constraints to business loans within your organization:
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={3}
						data={rank_imp_org}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={11}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '500px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '500px' : '400px' }}
					></active-table>
				{/if}
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					7. What information do you rely upon for credit risk assessments for business loans?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>8. How is the information used for credit assessments collected?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					9. Rank by order of importance from 1 to 5 (with ‘1’ most important), the factors
					contributing to the cost of credit for business loans
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={3}
						data={rank_imp_bin_lon}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={6}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '400px'
						}}
					></active-table>
				{/if}
				<Label>Are there any other major factors that contribute to the cost of credit?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					10. Rank by order of importance from 1 to 7 (with ‘1’ most important), the factors that
					contribute to rejected business loan applications
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={3}
						data={rank_imp_bin_lon_rej}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={8}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '500px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '500px' : '400px' }}
					></active-table>
				{/if}
				<Label>
					Are there any other factors that contribute to rejected business loan applications?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>11. What percentage of business loan applications are rejected?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>12. What percentage of business loans are non-performing?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					13. What percentage of your customers have existing digital loans (e.g. M-SHWARI, Fuliza,
					Tala, Branch)?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					14. What three major recommendations would you make to improve access to credit to FDPs
					and host families for business?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					15. Do you receive any funding from external organizations to lower the cost of credit for
					business loans to FDPs or host families?
				</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					16. Are there any policy or regulatory issues relevant around cross border transfers or
					holding multi-currencies accounts?
				</Label>
				<Textarea />
			</div>
		</div>
		<div class="grid gap-3">
			<h1 class="text-2xl font-semibold tracking-tight">PART C. SAVINGS</h1>
			<Separator />

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					1. Does your organization (group) offer savings products to FDPs and (or) host community
					families?
				</Label>
				<p class="text-sm italic">(If ‘NO’, Skip to Part D)</p>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. Rank by order of importance from 1 to 7 (with ‘1’ most important), the reasons for
					savings
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={3}
						data={rank_imp_sav}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert Rank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={8}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '400px'
						}}
					></active-table>
				{/if}
				<Label>Are there any other reasons for savings?</Label>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					3. Please list all savings products your organization offers to FDPs and (or) host
					community families (including digital savings products) in the table.
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={11}
						data={sav_prods}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						tableStyle={{ width: '900px' }}
						overflow={{ maxWidth: isDesktop.current ? '900px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>
		</div>
		<div class="grid gap-3">
			<h1 class="text-2xl font-semibold tracking-tight">PART D. INSURANCE</h1>
			<Separator />

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					1. Does your organization (group) offer insurance products to FDPs and (or) host community
					families?
				</Label>
				<p class="text-sm italic">(If ‘NO’, conclude interview)</p>
				<Textarea />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					2. Please list all insurance products your organization offers to FDPs and (or) host
					community families (including digital insurance products) in the table.
				</Label>
				{#if isLoaded}
					<active-table
						maxColumns={11}
						data={ins_prods}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Insert"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
						displayAddNewColumn={false}
						availableDefaultColumnTypes={['String']}
						tableStyle={{ width: '900px' }}
						overflow={{ maxWidth: isDesktop.current ? '900px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>
		</div>
		<Button
			onclick={() => {
				getInfo('codedinfo').then((res) => (codedinfo = res));
			}}>Save</Button
		>
		<form method="post" id="kutton">
			<input type="text" name="codedinfo" value={JSON.stringify(codedinfo)} />
			<input type="text" name="codedinfo" value={JSON.stringify(codedinfo)} />
			<Button type="submit">Button</Button>
		</form>
	</div>
</div>

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
