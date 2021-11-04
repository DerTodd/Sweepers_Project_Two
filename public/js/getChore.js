
const sendToDB1 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(1).value;
  const chore_id = 1;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB2 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(2).value;
  const chore_id = 2;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB3 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(3).value;
  const chore_id = 3;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB4 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(4).value;
  const chore_id = 4;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB5 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(5).value;
  const chore_id = 5;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB6 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(6).value;
  const chore_id = 6;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB7 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(7).value;
  const chore_id = 7;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB8 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(8).value;
  const chore_id = 8;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB9 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(9).value;
  const chore_id = 9;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
const sendToDB10 = async (event) => {
  event.preventDefault();
  alert("YEEHAW");
  const user_id = document.getElementById(10).value;
  const chore_id = 10;

  console.log(user_id);
  console.log(chore_id);

  if (user_id && chore_id) {
    const response = await fetch("/api/userchore/assignchore", {
      method: "POST",
      body: JSON.stringify({ user_id, chore_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/chores");
    } else {
      alert(response.statusText);
    }
  }
};
document.getElementById("washTheDishes").addEventListener("click", sendToDB1);
document.getElementById("trashy").addEventListener("click", sendToDB2);
document
  .getElementById("laundryOnTheField")
  .addEventListener("click", sendToDB3);
document.getElementById("witchesWork").addEventListener("click", sendToDB4);
document.getElementById("based").addEventListener("click", sendToDB5);
document.getElementById("youSuck").addEventListener("click", sendToDB6);
document.getElementById("fleshRemoval").addEventListener("click", sendToDB7);
document.getElementById("notAFan").addEventListener("click", sendToDB8);
document.getElementById("roomForError").addEventListener("click", sendToDB9);
document.getElementById("gameSetMatch").addEventListener("click", sendToDB10);
