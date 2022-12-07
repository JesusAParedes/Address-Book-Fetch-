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
    const img = document.querySelector("img");
    arrayofUsers.map(user => {
        img.src = `${user.picture.thumbnail}`;
        const text = document.createTextNode(`First Name: ${user.name.first} Last Name: ${user.name.last}` 
        ,)
        const li = document.createElement('li');
        li.appendChild(text);
        list.append(li);})
        
}


