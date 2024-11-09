export async function user() {
    try{
        const user = document.getElementById('user').value

        const response = await fetch('/', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                requestType: 'userdata',
                username: user

            })
        })
        const data = await response.text()
        return data
    } catch(error) {
        console.error('Hiba történt!', error);
    }
}