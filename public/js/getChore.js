// var washTheDishes = document.getElementById('washTheDishes');
// document.getElementById("washTheDishes").addEventListener("click", GetSelectedTextValue())

// function GetSelectedTextValue() {
//     var chore_id=1
//     selectedElement = document.getElementById(1)
//     var user_id = selectedElement.value;
    // alert("user_id: " + user_id);
    //  if (chore_id && user_id) {
    //           const response = await fetch('/api/userchore/assignchore', {
    //             method: 'POST',
    //             body: JSON.stringify({ chore_id, user_id }),
    //             headers: { 'Content-Type': 'application/json' },
    //           });
          
    //           if (response.ok) {
    //             document.location.replace('/chores');
    //           } else {
    //             alert(response.statusText);
    //           }
    //         }
      //    };
          const sendToDB = async (event) => {
            event.preventDefault();
            alert("YEEHAW");
            const user_id = document.getElementById(1).value;
            const chore_id = 1
            
        
            console.log(user_id);
            console.log(chore_id);
            
        
            if (user_id && chore_id) {
              const response = await fetch('/api/userchore/assignchore', {
                method: 'POST',
                body: JSON.stringify({ user_id, chore_id }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/chores');
              } else {
                alert(response.statusText);
              }
            }
          };
          document.getElementById('washTheDishes').addEventListener('click', sendToDB);