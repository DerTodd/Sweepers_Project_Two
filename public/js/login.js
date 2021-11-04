// Allow users to log in
const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
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
  };
};

document.getElementById('btnLog').addEventListener('click', loginHandler)
// Creates the modal for users to input their new account information
document.addEventListener('DOMContentLoaded', function () {
  let elems = document.querySelectorAll('.modal');
  let instances = M.Modal.init(elems, "");
});