
import { createUserObj, setLocalStorage } from './loc-stor-utils.js';


const elForm = document.getElementById('create-fighter');


elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(elForm);
    
    const userClass = form.get('user-fighter');
    const userName = form.get('user-name');

    const newUserObj = createUserObj(userName, userClass);

    setLocalStorage(newUserObj);

    window.location = './Dojo/';
});

