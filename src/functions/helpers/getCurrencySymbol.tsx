const getCurrencySymbol = (currency: string | null) => {

	const currencies = [
		{ 
			name:"EUR",
		 	symbol: "€" 
		},
		{
			name: "USD",
			symbol: "$"
		} 
	]

	return currency ? currencies.find((curr) => curr.name === currency)?.symbol || "" : "";

}

export default getCurrencySymbol;