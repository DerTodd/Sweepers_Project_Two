const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('emailSignUp').value.trim();
    const password = document.getElementById('passwordSignUp').value.trim();

    console.log(username);
    console.log(email);
    console.log(password);

    if (username && email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };
  document.getElementById('signup').addEventListener('click', signupFormHandler);

  