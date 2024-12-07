export const coded_info = [
	['Interview date (DD/MM/YYYY)', `${new Date().toDateString()}`],
	['Organization category (1=Bank, 2=MFI, 3=SACCO, 4=Other Informal Group, 5=Fintech', ''],
	['Respondent category (1=Manager, 2=Staff member)', '']
];
export const presence = [
	['Camp', '# of branches (or groups)'],
	['Dadaab', ''],
	['Kakuma', ''],
	['Kalobeyei', ''],
	['Other (specify)', '']
];

export const cat_cust = [
	['Description', 'Forcibly displaced persons', 'Individuals from host communities'],
	['Have a mobile phone registered in own name', '', ''],
	['Own a smart phone', '', ''],
	['Have a mobile money account registered in own name', '', '']
];

export const cred_prod = [
	[
		'Name of Product, e.g., Microbusiness loan',
		'Settlements Offered, e.g., Kakuma',
		'Eligibility Criteria for Borrower, e.g., Registered business with 2 years operation',
		'Range of Product in KES, e.g., 10,000-30,000',
		'Range of Term of Product, e.g., 30 days to 6 months',
		'Median Loan Amount Outstanding, e.g., KES 100 application fee',
		'Structure of Interest Rates and Fees, e.g., 10 percent interest rate per month',
		'Number of Borrowers with Loans Outstanding, e.g., 276',
		'Digital?, e.g., Yes',
		'Percent of Women Borrowers, e.g., 15%'
	],
	['', '', '', '', '', '', '', '', '', '']
];

export const rank_lon = [
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
	['export Construction', '', ''],
	['Transport (boda boda, taxi etc.)', '', ''],
	['Accommodation and food (bar, restaurant)', '', ''],
	['Accommodation and food (hotel, lodge)', '', ''],
	['Professional services (legal, accounting etc.)', '', ''],
	['Other (specify)', '', '']
];

export const rank_impo_indv = [
	['Description', 'Rank'],
	['Start a new business', ''],
	['Manage short-term liquidity', ''],
	['Purchase stock', ''],
	['Other capital expenditure', ''],
	['Pay off existing debt', ''],
	['Pay salaries or wages', '']
];

export const rank_imp_org = [
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

export const rank_imp_bin_lon = [
	['Description', 'Rank'],
	['Cost of capital', ''],
	['Operational costs', ''],
	['Risk premium', ''],
	['Profit', ''],
	['Provisioning for bad debt', '']
];

export const rank_imp_bin_lon_rej = [
	['Description', 'Rank'],
	['Incomplete applications', ''],
	['Underlying business to risky', ''],
	['Lack of ID', ''],
	['Lack of business registration or licenses', ''],
	['Lack of collateral', ''],
	['Lack of business accounts', ''],
	['Government policies are too prohibitive', '']
];

export const rank_imp_sav = [
	['Description', 'Rank'],
	['Start a new business', ''],
	['To expand or invest in a business', ''],
	['For emergencies (medical, burial)', ''],
	['Education', ''],
	['To meet day-to-day needs', ''],
	['For later in life (old age)', ''],
	['To pay salaries or wages', '']
];

export const sav_prods = [
	[
		'Name of Product, e.g., School Saver',
		'Settlements Offered, e.g., Kakuma',
		'Eligibility Criteria for Savings, e.g., 1) National ID. 2) KES 1000 deposit',
		'Median Account Balance, e.g., KES 1,530',
		'Structure of Interest Rates and Fees, e.g., 1) 5% APR. 2) KES 100 annual maintenance fee. 3) 50 KES per withdrawal',
		'Number of individuals with Savings, e.g., 2,360',
		'Digital?, e.g., Yes, M-PESA deposits and withdrawals',
		'Percent of Women, e.g., 20%'
	],
	['', '', '', '', '', '', '', '']
];

export const ins_prods = [
	[
		'Name of Product, e.g., MSME business insurance',
		'Settlements Offered, e.g., Kakuma and Dadaab',
		'Eligibility Criteria for Insurance, e.g., Assets up to KES. 100,000',
		'Value of Insurance Policy in KES, e.g., KES 1,530',
		'Structure of Interest Rates and Fees, e.g., 1) Coverage of all assets 2) Personal accident cover for business owner',
		'Number of individuals with Insurance, e.g., 120',
		'Digital?, e.g., KES XXX premium monthly',
		'Percent of Women, e.g., 15%'
	],
	['', '', '', '', '', '', '']
];
