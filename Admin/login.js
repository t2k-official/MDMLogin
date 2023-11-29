let usersData;

fetch('users.json')
  .then(response => response.json())
  .then(data => {
    usersData = data.users;
  })
  .catch(error => console.log('Error fetching users data:', error));

function checkLogin() {
  var enteredUsername = document.getElementById('username').value;
  var enteredPassword = document.getElementById('password').value;

  // Loop through the loaded usersData to check credentials
  let isValidUser = usersData.some(user => {
    return user.username === enteredUsername && user.password === enteredPassword;
  });

  if (isValidUser) {
    window.location.href = 'welcome.html'; // Redirect to welcome page upon successful login
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

document.getElementById('loginButton').addEventListener('click', checkLogin);
