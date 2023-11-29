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
    if(enteredUsername === 'mdm') {
    window.location.href = 'https://app.jamfnow.com'; 
    }
    else if(enteredUsername === 'monkey') {
    window.location.href = './Important/home.md'; 
    } else if(enteredUsername === 'Guest') {
    window.location.href = '../index.md'; 
    }
  } else {
    alert('Invalid username or password. Please try again.');
  }
}

document.getElementById('loginButton').addEventListener('click', checkLogin);
