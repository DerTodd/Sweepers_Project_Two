const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function (){
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none'
        }, 0);
    })
    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block'
            draggedItem = null; 
        }, 0)
    })
    
    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function (e){
            e.preventDefault();
        });
        list.addEventListener('dragenter', function(e){
            e.preventDefault();
        });
        list.addEventListener('drop', function (e) {
            console.log('drop')
            this.append(draggedItem)
        })
    }
}


//Call usernames form db and renders to the HTML page
const userRender = () => {
        fetch('/api/users/', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }).then(data => {return data.json()}).then(async (response) => {
            console.log(response)
            let standard = await response.filter(person => {
                return person.status === "standard";
            })
            // console.log(standard)
            displayStandard(standard);
        });

    };
userRender();

const userList = document.getElementById('user-list');

// const displayStandard = (arr) => {
//     arr.forEach(person => {
//         let el = `<div class="col s12 m4 l3 chore-list list my-list">${person.username}</div>`;
//        userList.innerHTML += el ;
//     });
// }


const displayStandard = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i];
        // console.log(person);
        const mainElement = document.querySelector("main"); 
        //create a div
        let el = `<div class="col s12 m4 l3 chore-list user-list list">${person.username}</div>`;
        el.replace(/['"]+/g, '')
        console.log(el)
        mainElement.innerHTML += el
    }
}