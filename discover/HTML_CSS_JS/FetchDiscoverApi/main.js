const url = "http://localhost:5500/api"

const error = error => console.error(error)

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error)
}

function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error)
}

getUsers()
getUser()