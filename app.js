
import { createUserObj, setLocalStorage } from './loc-stor-utils.js';


const elForm = document.getElementById('create-fighter');


elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(elForm);

    const newUserObj = createUserObj(form);

    setLocalStorage(newUserObj);

    window.location = './Dojo/';
});

