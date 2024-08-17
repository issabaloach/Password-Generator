function generatePassword() {
    // Get user inputs
    const length = parseInt(document.getElementById('passwordLength').value, 10);
    const numDigits = parseInt(document.getElementById('numDigits').value, 10);
    const numUppercase = parseInt(document.getElementById('numUppercase').value, 10);
    const numLowercase = parseInt(document.getElementById('numLowercase').value, 10);
    
    // Validate inputs
    if (isNaN(length) || isNaN(numDigits) || isNaN(numUppercase) || isNaN(numLowercase)) {
        alert("Please enter valid numbers.");
        return;
    }
    if (numDigits < 0 || numUppercase < 0 || numLowercase < 0) {
        alert("Counts must be non-negative.");
        return;
    }
    if (length !== (numDigits + numUppercase + numLowercase)) {
        alert("Password length must be equal to the sum of all character counts.");
        return;
    }

    // Define character sets
    const digits = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    // Generate random characters
    function getRandomCharacters(chars, num) {
        let result = '';
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    }

    const passwordDigits = getRandomCharacters(digits, numDigits);
    const passwordUppercase = getRandomCharacters(uppercase, numUppercase);
    const passwordLowercase = getRandomCharacters(lowercase, numLowercase);

    // Combine all characters and shuffle
    const passwordChars = passwordDigits + passwordUppercase + passwordLowercase;
    const shuffledPassword = passwordChars.split('').sort(() => Math.random() - 0.5).join('');

    // Display the password
    document.getElementById('password').textContent = shuffledPassword;
}