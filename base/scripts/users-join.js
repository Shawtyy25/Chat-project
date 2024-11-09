
function start() {
    dataFetch()
}

function dataFetch() {
    const user = document.getElementById('user').value
    fetch('/', {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            requestType: 'userdata',
            username: user

        })
    })
    .then(response => response.text())
    .then(data => {
        console.log('szervertől kapott adat:', data);
    }) 
    .then(error => {
        console.error('Hiba történt!', error);
    })
}

export { start }