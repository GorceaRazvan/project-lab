let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Oprește trimiterea formularului pentru a putea face validarea
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Validare: nume.prenume urmat opțional de maxim 2 cifre @e-uvt.ro
    const emailRegex = /^[a-zA-Z]+\.[a-zA-Z]+\d{0,2}@e-uvt\.ro$/;
    
    // Validare: minim 7 caractere, litere mici, mari, cifre și caractere speciale
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Eroare: Email-ul trebuie să respecte formatul UVT (ex: nume.prenume@e-uvt.ro sau nume.prenume12@e-uvt.ro)");
        return;
    }
    
    if (!passwordRegex.test(password)) {
        alert("Eroare: Parola trebuie să aibă minim 7 caractere și să includă majuscule, minuscule, cifre și caractere speciale.");
        return;
    }
    
    // Dacă trece validările, redirecționează către pagina home
    alert("Login reușit!");
    window.location.href = "home.html";
});