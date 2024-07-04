const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const input = document.getElementById('pass-input');
const charsLength = document.getElementById('chars-number')
const copyAlert = document.querySelector('.copy-alert')
const copyError = document.querySelector('.copy-error')
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_:;<>,.?/~`';
let password = '';

// password generator


function generatePassword() {
    password = '';
    let passwordLength = charsLength.value;
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        
    }
    input.value = password;
}


generateBtn.addEventListener('click', function () {
    copyAlert.style.display = "none";
    copyError.style.display = 'none'


    if (input.value === '') {
        generatePassword();
    } else {
        input.value = '';
        generatePassword()
    } 

    if (input.value === '' && charsLength.value === '' || charsLength.value == '0') {
        charsLength.value = 8;
        generatePassword();
    }
});



clearBtn.addEventListener('click', function () {
    input.value = ''
    charsLength.value = ''
    copyAlert.style.display = "none";
    copyError.style.display = 'none'

})


copyBtn.addEventListener('click', function () {
   
    if (input.value == '') {
        copyError.style.display = 'block'
    } else {
        input.select();
        input.setSelectionRange(0, 99999);
    
        document.execCommand('copy');
        copyAlert.style.display = "block"
        copyError.style.display = 'none'
    }

    
})