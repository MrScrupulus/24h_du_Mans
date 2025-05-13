function Inscription() {


    const formData =  {

        option: document.getElementById('select').value,
        nom: document.getElementById("name").value,
        prenom: document.getElementById("prenom").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        timestamp: new Date().toISOString(),   
        id: Date.now() // Utilisation de Date.now() pour générer un ID unique   
        
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
    let tableauFormData = JSON.parse(localStorage.getItem("tableauFormData")) || [];

    tableauFormData.push(formData);

    localStorage.setItem("tableauFormData", JSON.stringify(tableauFormData));


    telechargerJSON(tableauFormData);

    alert("Message sauvegardé ! Total des messages : " + tableauFormData.length);

     // Mettre à jour l'affichage des messages
    afficherMessages();
    }

    function afficherMessages() {
    const messagesContainer = document.getElementById("messages-container");
    const tableauFormData = JSON.parse(localStorage.getItem("tableauFormData")) || [];

    // Vider le conteneur avant d'ajouter les messages
    messagesContainer.innerHTML = "";

    // Parcourir les données et les afficher
    tableauFormData.forEach((item) => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        messageDiv.innerHTML = `
            <p><strong>Option :</strong> ${item.option}</p>
            <p><strong>Nom :</strong> ${item.nom}</p>
            <p><strong>Prénom :</strong> ${item.prenom}</p>
            <p><strong>Email :</strong> ${item.email}</p>
            <p><strong>Message :</strong> ${item.message}</p>
            <hr>
        `;
        messagesContainer.appendChild(messageDiv);
    });
}

function telechargerJSON(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tableauFormData_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
      Inscription();
      document.getElementById("contact-form").reset();

    
}
);


