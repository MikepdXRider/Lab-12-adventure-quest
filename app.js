
import { createUserObj, getLocalStorage, setLocalStorage } from './loc-stor-utils.js';


const elForm = document.getElementById('create-fighter');
// console.log('Should return a elForm', elForm);


elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = new FormData(elForm);
    // console.log('Should return form value', form.get('user-fighter'));

    const newUserObj = createUserObj(form);

    const userData = getLocalStorage();

    userData.push(newUserObj);

    setLocalStorage(userData);

    window.location = './dojo/';
});
