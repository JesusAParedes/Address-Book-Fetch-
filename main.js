let arrayofUsers;

window.onload = function() {
    grabData();
}

const grabData = () => {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(posts => arrayofUsers = posts.results)
    
}

const listUsers = () => {
    const list = document.getElementById('user'); //grab list from html
    
    arrayofUsers.map(user => { // start going through the data
        const img = new Image(); //create an image
        const button = document.createElement('button'); //create a button
        button.setAttribute('id', user.login.username); //set the button id to the user id
        console.log(button.id)
        const text = document.createTextNode(`First Name: ${user.name.first} Last Name: ${user.name.last}`); //give the first and last name from the address
        button.innerHTML = "More Info About Me!"; //give the button some text
        img.src = user.picture.thumbnail; //show the picture of the person on the page
        
        const li = document.createElement('li'); // create a listed item
        li.appendChild(text); //attaching the text of the person's basic info to the list
        list.append(img); // attaching the image to list on the html page
        list.append(button); //attaching the button for more info to the list on the html page
        list.append(li); // attaching the list of basic info to the bigger list on the html page

        button.addEventListener("click", () => {//when the created button is clicked, following function is run to add the extra info

            arrayofUsers.filter(user => {//info is filtered to find the extra information
            if(button.id === user.login.username) {//if button.id = user.login.username show the info
                const extraInfo = document.createTextNode(`DOB: ${user.dob.date} Location: ${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country} Cell: ${user.cell}`) //create another text of that info
    
            const smallerLi = document.createElement('li'); //create another list
            smallerLi.appendChild(extraInfo); //add the other info to the smaller list
            li.append(smallerLi); //attach the smaller list directly under the basic info of each person
            list.append();
        }
            
        })}) 
    }
    )
    
}





