var form=document.getElementById('forgot-passsword');

form.addEventListener('submit',SaveToBackend);

async function SaveToBackend(event){
    event.preventDefault();

    const email = event.target.useremail.value;

    const frgotDetails = {email};

    try {
        const response = await axios.post("http://localhost:3000/password/forgotpassword", frgotDetails);
        alert(response.data.message);
        console.log(response.data);
        

    } catch (error) {
        document.body.innerHTML+=`<h2>${error}</h2>`;
        console.log(error);
    }

    
    
}

