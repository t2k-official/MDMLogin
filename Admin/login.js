function checkLogin() {
  var enteredUsername = document.getElementById('username').value;
  var enteredPassword = document.getElementById('password').value;

  // You can replace these with your actual username and password validation logic
  var storedUsername = 'example_username';
  var storedPassword = 'example_password';

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    window.location.href = 'welcome.html'; // Redirect to welcome page upon successful login
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

document.getElementById('loginButton').addEventListener('click', checkLogin);
