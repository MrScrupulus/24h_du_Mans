function Inscription() {


    const formData =  {

        option: document.getElementById('select').value,
        nom: document.getElementById("name").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        timestamp: new Date().toISOString(),      
        
    };
    if (formData.nom === "" || formData.prenom === "" || formData.email === "" || formData.message === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    if (!formData.email.includes("@")) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }
    if (formData.message.length < 10) {
        alert("Le message doit contenir au moins 10 caractères.");
        return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Inscription réussie !");
}




document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
      Inscription();

      document.getElementById("contact-form").reset();

    
}
);