<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Textarea } from '$lib/components/ui/textarea';
	// import { onMount, untrack } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';

	const isDesktop = new MediaQuery('min-width: 768px');

	interface Data {
		question: string;
		answer: string;
	}
	let { tabledata, inputanswers }: { tabledata: Data[]; inputanswers: Data[] } = $props();
	// stores

	let isLoaded = $state(false);
	let getTableData = $state() as (data: Data[], element: string) => any;
	$effect(() => {
		(async () => {
			await import('active-table');
			isLoaded = true;
		})();

		getTableData = (data, element) => {
			const result = data.find((e) => e.question === element);
			return result ? result.answer : 'null';
		};
	});

	$effect(() => {
		organization = getTableData(inputanswers, 'organization');
		for (let i = 1; i <= 23; i++) {
			const key = `answer${i}`;
			states[key] = getTableData(inputanswers, key);
		}
	});
	let organization = $state() as string;
	let states: Record<string, string> = $state({});
</script>

<div class="m-5" id="questionnaire">
	<h1 class="text-center text-3xl font-semibold tracking-tight text-muted-foreground">Results</h1>
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
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="codedinfo"
						maxColumns="3"
						data={getTableData(tabledata, 'codedinfo')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="3"
						availableDefaultColumnTypes={['String']}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '450px'
						}}
						overflow={{ maxWidth: isDesktop.current ? '450px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>
			<div class="grid max-w-2xl gap-2 py-5">
				<Label>1.1. Name of the organization or group</Label>
				<Input disabled class="max-w-xs" name="organization" value={organization} />
			</div>
			<div class="grid gap-2 space-y-3 py-5">
				<Label>1.2. Please indicate the locations in which your organization has a presence</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table1"
						maxColumns="3"
						data={getTableData(tabledata, 'table1')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="5"
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
				<Textarea disabled name="answer1" value={states.answer1} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					2. Are there any specific policies that make it difficult for FDPs to access finance?
				</Label>
				<p class="text-sm italic">(If ‘NO’, Skip to Question 5)</p>
				<Textarea disabled name="answer2" value={states.answer2} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					3. Which government policies <span class="text-sm italic">(if any)</span> make it difficult
					for FDPs to access finance?
				</Label>
				<Textarea disabled name="answer3" value={states.answer3} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					4. Which organizational policies <span class="text-sm italic">(if any)</span> make it difficult
					for FDPs to access finance?
				</Label>
				<Textarea disabled name="answer4" value={states.answer4} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>5. Please indicate for each category of customers below, the percent that:</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table2"
						maxColumns="3"
						data={getTableData(tabledata, 'table2')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows="4"
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
				<Textarea disabled name="answer5" value={states.answer5} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. Please list all credit products your organization offers to FDPs and (or) host
					community families (including digital loans), within the table.
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table3"
						maxColumns={11}
						data={getTableData(tabledata, 'table3')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
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
				<Textarea disabled name="answer6" value={states.answer6} />
				<Label>If so, please describe how this works</Label>
				<Textarea disabled name="answer7" value={states.answer7} />
			</div>
			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. Please list all credit products your organization offers to FDPs and (or) host
					community families (including digital loans), within the table.
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table4"
						maxColumns={11}
						data={getTableData(tabledata, 'table4')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={16}
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
				<Input disabled name="answer8" value={states.answer8} />
				<Label class="text-sm italic">If ‘NO’, Why?</Label>
				<Textarea disabled name="answer9" value={states.answer9} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					6. by order of importance (with ‘1’ most important), the purposes for which individuals
					take business loans
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table5"
						maxColumns={3}
						data={getTableData(tabledata, 'table5')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={6}
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
				<Textarea disabled name="answer10" value={states.answer10} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					6. by order of importance from 1 to 10 (with ‘1’ most important), the following
					constraints to business loans within your organization:
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table6"
						maxColumns={3}
						data={getTableData(tabledata, 'table6')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={11}
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
				<Textarea disabled name="answer11" value={states.answer11} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>8. How is the information used for credit assessments collected?</Label>
				<Textarea disabled name="answer12" value={states.answer12} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					9. by order of importance from 1 to 5 (with ‘1’ most important), the factors contributing
					to the cost of credit for business loans
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table7"
						maxColumns={3}
						data={getTableData(tabledata, 'table7')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={6}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '400px'
						}}
					></active-table>
				{/if}
				<Label>Are there any other major factors that contribute to the cost of credit?</Label>
				<Textarea disabled name="answer13" value={states.answer13} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					10. by order of importance from 1 to 7 (with ‘1’ most important), the factors that
					contribute to rejected business loan applications
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table8"
						maxColumns={3}
						data={getTableData(tabledata, 'table8')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={8}
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
				<Textarea disabled name="answer14" value={states.answer14} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>11. What percentage of business loan applications are rejected?</Label>
				<Textarea disabled name="answer15" value={states.answer15} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>12. What percentage of business loans are non-performing?</Label>
				<Textarea disabled name="answer16" value={states.answer16} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					13. What percentage of your customers have existing digital loans (e.g. M-SHWARI, Fuliza,
					Tala, Branch)?
				</Label>
				<Textarea disabled name="answer17" value={states.answer17} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					14. What three major recommendations would you make to improve access to credit to FDPs
					and host families for business?
				</Label>
				<Textarea disabled name="answer18" value={states.answer18} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					15. Do you receive any funding from external organizations to lower the cost of credit for
					business loans to FDPs or host families?
				</Label>
				<Textarea disabled name="answer19" value={states.answer19} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					16. Are there any policy or regulatory issues relevant around cross border transfers or
					holding multi-currencies accounts?
				</Label>
				<Textarea disabled name="answer20" value={states.answer20} />
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
				<Textarea disabled name="answer21" value={states.answer21} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					2. by order of importance from 1 to 7 (with ‘1’ most important), the reasons for savings
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table9"
						maxColumns={3}
						data={getTableData(tabledata, 'table9')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={8}
						availableDefaultColumnTypes={['String']}
						spellCheck={true}
						tableStyle={{
							boxShadow: 'rgb(172 172 172 / 17%) 0px 0.5px 1px 0px',
							width: '400px'
						}}
					></active-table>
				{/if}
				<Label>Are there any other reasons for savings?</Label>
				<Textarea disabled name="answer22" value={states.answer22} />
			</div>

			<div class="grid max-w-2xl gap-2 space-y-3 py-5">
				<Label>
					3. Please list all savings products your organization offers to FDPs and (or) host
					community families (including digital savings products) in the table.
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table10"
						maxColumns={11}
						data={getTableData(tabledata, 'table10')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
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
				<Textarea disabled name="answer23" value={states.answer23} />
			</div>

			<div class="grid max-w-2xl gap-2 py-5">
				<Label>
					2. Please list all insurance products your organization offers to FDPs and (or) host
					community families (including digital insurance products) in the table.
				</Label>
				{#if isLoaded}
					<active-table
						isCellTextEditable={false}
						displayAddNewColumn={false}
						displayAddNewRow={false}
						columnDropdown={{ displaySettings: { isAvailable: false } }}
						rowDropdown={{ displaySettings: { isAvailable: false } }}
						id="table11"
						maxColumns={11}
						data={getTableData(tabledata, 'table11')}
						headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
						rowHoverStyles={{
							style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' }
						}}
						enterKeyMoveDown={true}
						defaultText="Left Blank"
						isDefaultTextRemovable={true}
						isHeaderTextEditable={false}
						maxRows={10}
						availableDefaultColumnTypes={['String']}
						tableStyle={{ width: '900px' }}
						overflow={{ maxWidth: isDesktop.current ? '900px' : '400px' }}
						spellCheck={true}
					></active-table>
				{/if}
			</div>
		</div>
	</div>
</div>
