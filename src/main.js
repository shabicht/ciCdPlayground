import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Sarah H.',
		// In the following fields you can either give a single string,
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Ehm, what?'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Does Github Actions count?',
		// What do you want to learn in this workshop? 
		expectations: [
			'As much as possible about CI/CD, Github Actions and pipelines, ' +
			'What Jenkins is maybe'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'go hiking and exploring nature',
			'playing with dogs',
			'camping',
			'but also gaming and watching Netflix :p'
		]
	}
});
