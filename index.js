// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(appendToDoc)
    .catch(errorAppender)
}

function appendToDoc(object){
    console.log(object.id)
    document.body.innerHTML = `
    <div>${object.id}</div>`
}

function errorAppender(err){
    console.log(err);
    document.body.innerHTML = `
    <div>${err}</div>`
}