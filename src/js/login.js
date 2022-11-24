
let correo = document.getElementById("correo");
let contraseña = document.getElementById("contraseña");
let alerta = document.getElementById("alerta");
let btnlogin = document.getElementById("login");

alerta.style.display = "none";

btnlogin.addEventListener('click', event => {
    event.preventDefault()
    if (correo.value === 'notiunah@unah.hn' && contraseña.value === '123') {
      localStorage.setItem('isLoggedIn', 'true')
      window.location.href = '/panel/Panel'
    } else {
        alerta.style.display = 'block';
    }
  })
