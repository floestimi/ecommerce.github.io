document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("login").addEventListener("click", () => {
        const mail = document.getElementById("floatingInput").value;
        const pass = document.getElementById("floatingPassword").value;

        if (mail.lenght > 6 && pass.lenght >= 6) {
            try {
                localStorage.setItem("user", JSON.stringify({ 'mail':mail, 'pass': pass }));
            } catch (e) {
            }
            this.location.href = "./index.html";
        }
    });
});