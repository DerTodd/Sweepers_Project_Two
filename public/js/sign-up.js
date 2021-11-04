// Allows users to create an account
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('user_name').value.trim();
  const email = document.getElementById('emailSignUp').value.trim();
  const password = document.getElementById('passwordSignUp').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (response.ok) {
      document.location.replace('/chores');
    } else {
      alert(response.statusText);
    }
  }
};
document.getElementById('signup').addEventListener('click', signupFormHandler);