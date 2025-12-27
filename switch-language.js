// Specify accepted languages
const LANG_SET = new Set(["en", "ja"]);


// Define on-load callback
const loadLanguage = () =>{
	// Check the URL parameters and see if it has explicit lang parameters
	const urlParams = new URLSearchParams(window.location.search);
	let lang = "en"; // by default, show english page
	if (urlParams.has("lang")) {
		// If valid lang param is passed, keep it
		if (LANG_SET.has(urlParams.get("lang"))) {
			lang = urlParams.get("lang");
		}
	};

	// load text substitute for appropriate json file
	// written as a sequence of anonymous functions
	console.log('language: '+lang);
	fetch('text_'+lang+'.json')
		.then(response => { // resposne is the returned value of fetch
			if (!response.ok){ // in case fetch fails
				throw new Error(response.status);
			}
			return response.json(); // pass the content down
		})
		.then(data => { // gets the content
			// get everything with 'text-key' properties, 
			// loop over them, and get appropriate text from
			// json, put them inside the tag
			document.querySelectorAll('[text-key]').forEach((element) => {
				const key_name = element.getAttribute('text-key');
				element.innerHTML = data[key_name];
			});


		})
		.catch(error => console.error('Error loading language file:', error));

	// add lang parameters to all links so pages will show in
	// the same language
	document.querySelectorAll('a[href]').forEach((element) => {
		// get all links
		let current_url_str = element.getAttribute('href');
		// We do this only for internal, html files
		if (current_url_str.substring(0,2)=='./' &&
		    current_url_str.substring(current_url_str.length - 4)=='html'){
			// manually add language parameter
			// This is guaranteed to work, because the relative reference
			// is written manually in the text, so you don't get 
			// unruly accumulation of duplicate parameters
			element.setAttribute('href', current_url_str+'?lang='+lang);
		}
	});
}





// Set the callback
window.onload = () => {
	loadLanguage();
}