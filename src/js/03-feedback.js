import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORE_KEY = 'feedback-form-state';
const dataObj = {};
onPageLoad();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
	dataObj.email = form.elements.email.value;
	dataObj.message = form.elements.message.value;
	localStorage.setItem(LOCALSTORE_KEY, JSON.stringify(dataObj));
}

function onFormSubmit(e) {
	e.preventDefault();
	e.currentTarget.reset();
	localStorage.removeItem(LOCALSTORE_KEY);
	console.log(dataObj);
}

function onPageLoad() {
	const fetchedData = JSON.parse(localStorage.getItem(LOCALSTORE_KEY));
	if (fetchedData) {
		form.elements.email.value = fetchedData.email;
		form.elements.message.value = fetchedData.message;
	}
}
