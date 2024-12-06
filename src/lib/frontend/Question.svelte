<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import { Textarea } from '$lib/components/ui/textarea';
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';

	const isDesktop = new MediaQuery('min-width: 768px');
	onMount(async () => {
		await import('active-table');
		isLoaded = true;
	});

	let isLoaded = $state(false);
	const coded_info = [
		['Interview date (DD/MM/YYYY)', ''],
		['Interviewer code', ''],
		['Organization category (1=Bank, 2=MFI, 3=SACCO, 4=Other Informal Group, 5=Fintech', ''],
		['Respondent category (1=Manager, 2=Staff member)', '']
	];
	const presence = [
		['Camp', '# of branches (or groups)'],
		['Dadaab', ''],
		['Kakuma', ''],
		['Kalobeyei', ''],
		['Other (specify)', '']
	];

	const cat_cust = [
		['Description', 'Forcibly displaced persons', 'Individuals from host communities'],
		['Have a mobile phone registered in own name', '', ''],
		['Own a smart phone', '', ''],
		['Have a mobile money account registered in own name', '', '']
	];

	const cred_prod = [
		[
			'Name of Product',
			'Settlements Offered',
			'Eligibility Criteria for Borrower',
			'Range of Product in KES',
			'Range of Term of Product',
			'Median Loan Amount Outstanding',
			'Structure of Interest Rates and Fees',
			'Number of Borrowers with Loans Outstanding',
			'Digital?',
			'Percent of Women Borrowers'
		],
		[
			'Microbusiness loan',
			'Kakuma',
			`
            1) Registered business with 2 years operation.
            2) 50% collateral in account
            3) Cosigner
        `,
			'10,000-30,000',
			'30 days to 6 months',
			'18,000',
			`
        KES 100 application fee.
        10 percent interest rate per month
        `,
			'276',
			'Yes',
			'15%'
		],
		['', '', '', '', '', '', '', '', '', '']
	];

	const rank_lon = [
		['Economic Activity', 'FDP', 'Host community'],
		['Agriculture', '', ''],
		['Trade (fruits, vegetables, other produce, meat, fish)', '', ''],
		['Trade (clothes)', '', ''],
		['Trade (electronics)', '', ''],
		['Trade (chemists or pharmacies)', '', ''],
		['Other trade', '', ''],
		['Community or personal services (salon, barber etc.)', '', ''],
		['Other community or personal services', '', ''],
		['Manufacturing (furniture, textiles etc.)', '', ''],
		['Construction', '', ''],
		['Transport (boda boda, taxi etc.)', '', ''],
		['Accommodation and food (bar, restaurant)', '', ''],
		['Accommodation and food (hotel, lodge)', '', ''],
		['Professional services (legal, accounting etc.)', '', ''],
		['Other (specify)', '', '']
	];

	const rank_impo_indv = [
		['Description', 'Rank'],
		['Start a new business', ''],
		['Manage short-term liquidity', ''],
		['Purchase stock', ''],
		['Other capital expenditure', ''],
		['Pay off existing debt', ''],
		['Pay salaries or wages', '']
	];

	const rank_imp_org = [
		['Description', 'Rank'],
		['Financial Literary', ''],
		['Digital Literacy', ''],
		['Access to a mobile phone', ''],
		['Mobile money access', ''],
		['Mobile network coverage', ''],
		['SIM card KYC', ''],
		['Unregistered business', ''],
		['Lack of business records', ''],
		['Location of business in risky area', ''],
		['Distance of travel to bank branch', '']
	];

	const rank_imp_bin_lon = [
		['Description', 'Rank'],
		['Cost of capital', ''],
		['Operational costs', ''],
		['Risk premium', ''],
		['Profit', ''],
		['Provisioning for bad debt', '']
	];

	const rank_imp_bin_lon_rej = [
		['Description', 'Rank'],
		['Incomplete applications', ''],
		['Underlying business to risky', ''],
		['Lack of ID', ''],
		['Lack of business registration or licenses', ''],
		['Lack of collateral', ''],
		['Lack of business accounts', ''],
		['Government policies are too prohibitive', '']
	];

	const rank_imp_sav = [
		['Description', 'Rank'],
		['Start a new business', ''],
		['To expand or invest in a business', ''],
		['For emergencies (medical, burial)', ''],
		['Education', ''],
		['To meet day-to-day needs', ''],
		['For later in life (old age)', ''],
		['To pay salaries or wages', '']
	];

	const sav_prods = [
		[
			'Name of Product',
			'Settlements Offered',
			'Eligibility Criteria for Savings',
			'Median Account Balance',
			'Structure of Interest Rates and Fees',
			'Number of individuals with Savings',
			'Digital?',
			'Percent of Women'
		],
		[
			'School Saver',
			'Kakuma',
			`
            1) National ID.
            2) KES 1000 deposit
        `,
			'KES 1,530',
			`
            1) 5% APR.
            2) KES 100 annual maintenance fee.
            3) 50 KES per withdrawal.

        `,
			'2,360',
			'Yes, M-PESA deposits and withdrawals',
			'20%'
		],
		['', '', '', '', '', '', '']
	];
	const ins_prods = [
		[
			'Name of Product',
			'Settlements Offered',
			'Eligibility Criteria for Insurance',
			'Value of Insurance Policy in KES',
			'Structure of Interest Rates and Fees',
			'Number of individuals with Insurance',
			'Digital?',
			'Percent of Women'
		],
		[
			'MSME business insurance',
			'Kakuma and Dadaab',
			'Assets up to KES. 100,000',
			'KES 1,530',
			`
           1) Coverage of all assets
           2) Personal accident cover for business owner
        `,
			'KES XXX premium monthly',
			'120',
			'15%'
		],
		['', '', '', '', '', '', '']
	];
</script>

<div class="m-5" id="questionnaire">
	<h1 class="text-center text-3xl font-semibold tracking-tight text-muted-foreground">
		Questionnaire
	</h1>
	<div
		class="mx-auto flex w-full max-w-4xl flex-col justify-center space-y-2 py-16 text-muted-foreground"
	>
		<div class="grid gap-2 space-y-3">
			<h1 class="text-xl font-semibold tracking-tight">
				Coded information (Interviewer to complete)
			</h1>
			<Separator class="mb-2 w-96" />
			{#if isLoaded}
				<active-table
					maxColumns="3"
					data={coded_info}
					headerStyles={{ default: { backgroundColor: '#d6d6d630' } }}
					rowHoverStyles={{ style: { backgroundColor: '#d6d6d630', transitionDuration: '0.05s' } }}
					enterKeyMoveDown={true}
					defaultText="Insert"
					isDefaultTextRemovable={true}
					isHeaderTextEditable={false}
					maxRows="4"
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

		<div class="grid gap-2 py-10">
			<h1 class="text-2xl font-semibold tracking-tight">PART I: ORGANIZATION/GROUP BACKGROUND</h1>
			<Separator />
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
		<div id="kutton">
			<Button
				class="mx-auto justify-start"
				onclick={() => {
					setTimeout(() => {
						window.print();
					}, 50);
				}}>Submit</Button
			>
		</div>
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
