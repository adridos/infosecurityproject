// Function to generate a random password
function generateRandomPassword() {
    const length = 16; 
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"; // Add any special characters you want
  
    const charset = lowercaseChars + uppercaseChars + numberChars + specialChars;
    let password = "";
  
    // Ensure at least one lowercase, one uppercase, and one number character
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
  
    // Generate the remaining characters
    for (let i = 3; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    // Shuffle the characters to make the order random
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
  }
  
  // Attach the generateRandomPassword function to the "click" event of the "Generate Password" button
  const generatePasswordButton = document.getElementById("generatePasswordButton");
  generatePasswordButton.addEventListener("click", function() {
    const generatedPassword = generateRandomPassword();
    document.getElementById("register-password").value = generatedPassword;
  });
  
