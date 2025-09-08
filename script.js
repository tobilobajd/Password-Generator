'use strict';

// Select DOM elements
// Get the password input box
const passwordBox = document.getElementById('password');
const length = 16;

// Character sets
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// All characters combined
const allCharacters = upperCase + lowerCase + numbers + symbols;

// Function to create a random password
function createPassword() {
	let password = '';
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];

	// Fill the rest of the password length with random characters
	while (password.length < length) {
		password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
	}
	passwordBox.value = password;
}

// Function to copy the password to clipboard
function copyPassword() {
	passwordBox.select();
	document.execCommand('copy');
}
