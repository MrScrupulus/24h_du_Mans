function Inscription() {


    const formData =  {

        option: document.getElementById('select').value,
        nom: document.getElementById("nom").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        timestamp: new Date().toISOString(),      
        
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Inscription réussie !");

    



    if (nom.value === "" || prenom.value === "" || email.value === "" || message.value === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    if (!validateEmail(email.value)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }
    if (message.value.length < 10) {
        alert("Le message doit contenir au moins 10 caractères.");
        return;
    }

    



    
}