const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    console.log(email);
    console.log(password);

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        // response.ok is read-only (true or false) stating whether the res was successful
        if (response.ok) {
          // If successful, redirect the browser to the homepage
          console.log('logged in!')
          // document.location.replace('/homepage');
        } else {
          alert(response.statusText);
        }
    };
};

document.getElementById('btnLog').addEventListener('click', loginHandler)

// document.addEventListener('DOMContentLoaded', function () {
//   let elems = document.querySelectorAll('.modal');
//   let instances = M.Modal.init(elems, "");
// });