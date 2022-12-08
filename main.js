let arrayofUsers;

window.onload = function() {
    grabData();
}

const grabData = () => {
    fetch('https://randomuser.me/api/?results=2')
    .then(res => res.json())
    .then(posts => arrayofUsers = posts.results)
    
}

const listUsers = () => {
    const list = document.getElementById('user');
    arrayofUsers.map(otherInfo => {
        const newText = document.createTextNode(`DOB: ${user.dob} Address: ${user.location}`);
    })
    
    arrayofUsers.map(user => {
        const img = new Image();
        let text = document.createTextNode(`First Name: ${user.name.first} Last Name: ${user.name.last}`);
        const button = document.createElement('button');
        button.innerHTML = "More Info About Me!";
        img.src = user.picture.thumbnail;
        
        const li = document.createElement('li');
        button.addEventListener("click", extraInfo)
        li.appendChild(text);
        list.append(img);
        list.append(button);
        list.append(li);
    }
    )
        
}


const extraInfo = () => {
    const list = document.getElementById('user');
    arrayofUsers.map(user => {
        dob = document.createTextNode(`DOB: ${user.dob.date}`);

        loc = document.createTextNode(`Location: ${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.country}`);

        cell = document.createTextNode(`Cell: ${user.cell}`);
    })
    const li = document.createElement('li');
    console.log(dob);
    console.log(location);
    console.log(cell);
    li.appendChild(dob);
    li.appendChild(loc);
    li.appendChild(cell);
    list.append(li);
    list.append(li);
    
}


