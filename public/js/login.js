const loginBtn = document.getElementById('btnLog');

const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value();
    const password = document.getElementById('password').value();
    
    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        // response.ok is read-only (true or false) stating whether the res was successful
        if (response.ok) {
          // If successful, redirect the browser to the homepage
          document.location.replace('/homepage');
        } else {
          alert(response.statusText);
        }
    };
};

loginBtn.addEventListener("click", loginHandler)