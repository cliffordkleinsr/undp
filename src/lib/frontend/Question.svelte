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
	let table1 = $state() as (string | number)[][] | undefined;
	let table2 = $state() as (string | number)[][] | undefined;
	let table3 = $state() as (string | number)[][] | undefined;
	let table4 = $state() as (string | number)[][] | undefined;
	let table5 = $state() as (string | number)[][] | undefined;
	let table6 = $state() as (string | number)[][] | undefined;
	let table7 = $state() as (string | number)[][] | undefined;
	let table8 = $state() as (string | number)[][] | undefined;
	let table9 = $state() as (string | number)[][] | undefined;
	let table10 = $state() as (string | number)[][] | undefined;
	let table11 = $state() as (string | number)[][] | undefined;

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
		<form method="post">
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
					<Input class="max-w-xs" name="organization" />
				</div>
				<div class="grid gap-2 space-y-3 py-5">
					<Label>1.2. Please indicate the locations in which your organization has a presence</Label
					>
					{#if isLoaded}
						<active-table
							id="table1"
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
					<Textarea name="answer1" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						2. Are there any specific policies that make it difficult for FDPs to access finance?
					</Label>
					<p class="text-sm italic">(If ‘NO’, Skip to Question 5)</p>
					<Textarea name="answer2" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						3. Which government policies <span class="text-sm italic">(if any)</span> make it difficult
						for FDPs to access finance?
					</Label>
					<Textarea name="answer3" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						4. Which organizational policies <span class="text-sm italic">(if any)</span> make it difficult
						for FDPs to access finance?
					</Label>
					<Textarea name="answer4" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>5. Please indicate for each category of customers below, the percent that:</Label>
					{#if isLoaded}
						<active-table
							id="table2"
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
					<Textarea name="answer5" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						2. Please list all credit products your organization offers to FDPs and (or) host
						community families (including digital loans), within the table.
					</Label>
					{#if isLoaded}
						<active-table
							id="table3"
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
					<Textarea name="answer6" />
					<Label>If so, please describe how this works</Label>
					<Textarea name="answer7" />
				</div>
				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						2. Please list all credit products your organization offers to FDPs and (or) host
						community families (including digital loans), within the table.
					</Label>
					{#if isLoaded}
						<active-table
							id="table4"
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
					<Input name="answer8" />
					<Label class="text-sm italic">If ‘NO’, Why?</Label>
					<Textarea name="answer9" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						6. Rank by order of importance (with ‘1’ most important), the purposes for which
						individuals take business loans
					</Label>
					{#if isLoaded}
						<active-table
							id="table5"
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
					<Textarea name="answer10" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						6. Rank by order of importance from 1 to 10 (with ‘1’ most important), the following
						constraints to business loans within your organization:
					</Label>
					{#if isLoaded}
						<active-table
							id="table6"
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
					<Textarea name="answer11" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>8. How is the information used for credit assessments collected?</Label>
					<Textarea name="answer12" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						9. Rank by order of importance from 1 to 5 (with ‘1’ most important), the factors
						contributing to the cost of credit for business loans
					</Label>
					{#if isLoaded}
						<active-table
							id="table7"
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
					<Textarea name="answer13" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						10. Rank by order of importance from 1 to 7 (with ‘1’ most important), the factors that
						contribute to rejected business loan applications
					</Label>
					{#if isLoaded}
						<active-table
							id="table8"
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
					<Textarea name="answer14" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>11. What percentage of business loan applications are rejected?</Label>
					<Textarea name="answer15" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>12. What percentage of business loans are non-performing?</Label>
					<Textarea name="answer16" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						13. What percentage of your customers have existing digital loans (e.g. M-SHWARI,
						Fuliza, Tala, Branch)?
					</Label>
					<Textarea name="answer17" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						14. What three major recommendations would you make to improve access to credit to FDPs
						and host families for business?
					</Label>
					<Textarea name="answer18" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						15. Do you receive any funding from external organizations to lower the cost of credit
						for business loans to FDPs or host families?
					</Label>
					<Textarea name="answer19" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						16. Are there any policy or regulatory issues relevant around cross border transfers or
						holding multi-currencies accounts?
					</Label>
					<Textarea name="answer20" />
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
					<Textarea name="answer21" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						2. Rank by order of importance from 1 to 7 (with ‘1’ most important), the reasons for
						savings
					</Label>
					{#if isLoaded}
						<active-table
							id="table9"
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
					<Textarea name="answer22" />
				</div>

				<div class="grid max-w-2xl gap-2 space-y-3 py-5">
					<Label>
						3. Please list all savings products your organization offers to FDPs and (or) host
						community families (including digital savings products) in the table.
					</Label>
					{#if isLoaded}
						<active-table
							id="table10"
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
						1. Does your organization (group) offer insurance products to FDPs and (or) host
						community families?
					</Label>
					<p class="text-sm italic">(If ‘NO’, conclude interview)</p>
					<Textarea name="answer23" />
				</div>

				<div class="grid max-w-2xl gap-2 py-5">
					<Label>
						2. Please list all insurance products your organization offers to FDPs and (or) host
						community families (including digital insurance products) in the table.
					</Label>
					{#if isLoaded}
						<active-table
							id="table11"
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
					getInfo('table1').then((res) => (table1 = res));
					getInfo('table2').then((res) => (table2 = res));
					getInfo('table3').then((res) => (table3 = res));
					getInfo('table4').then((res) => (table4 = res));
					getInfo('table5').then((res) => (table5 = res));
					getInfo('table6').then((res) => (table6 = res));
					getInfo('table7').then((res) => (table7 = res));
					getInfo('table8').then((res) => (table8 = res));
					getInfo('table9').then((res) => (table9 = res));
					getInfo('table10').then((res) => (table10 = res));
					getInfo('table11').then((res) => (table11 = res));
				}}>Save</Button
			>

			<input type="text" name="codedinfo" value={JSON.stringify(codedinfo)} hidden/>
			<input type="text" name="table1" value={JSON.stringify(table1)} hidden/>
			<input type="text" name="table2" value={JSON.stringify(table2)} hidden/>
			<input type="text" name="table3" value={JSON.stringify(table3)} hidden/>
			<input type="text" name="table4" value={JSON.stringify(table4)} hidden/>
			<input type="text" name="table5" value={JSON.stringify(table5)} hidden/>
			<input type="text" name="table6" value={JSON.stringify(table6)} hidden/>
			<input type="text" name="table7" value={JSON.stringify(table7)} hidden/>
			<input type="text" name="table8" value={JSON.stringify(table8)} hidden/>
			<input type="text" name="table9" value={JSON.stringify(table9)} hidden/>
			<input type="text" name="table10" value={JSON.stringify(table10)} hidden/>
			<input type="text" name="table11" value={JSON.stringify(table11)} hidden/>
			<Button type="submit" variant="secondary">Submit</Button>
			<p class="text-destructive">You <span class="font-bold">Must</span> click on save before submiting!</p>
		</form>
	</div>
</div>
