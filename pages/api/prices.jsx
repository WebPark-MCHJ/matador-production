fetch('https://metals-api.com/api/latest?access_key=vi83px8ozew73fu3ou0iikm120p27m9cvbmy0477omj4mwof4z0pfn33hwvz&base=USD&symbols=XPD%2CXPT%2CXRH')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));