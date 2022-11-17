function validarEmail() {
  let email = document.getElementById("input-email");
  let emailUsuario = email.value;

  if (emailVacio(emailUsuario)) {
    alert(`Por favor, introduzca un email.`);
    return false;
  }

  if (!emailInvalido(emailUsuario)) {
    alert(`Parece que el email ${emailUsuario} no es correcto.\nPor favor, revíselo.`);
    return false;
  }

  alert(`Su email ${emailUsuario} ha sido dado correctamente de alta.`);
}

function emailInvalido(email) {
  let error = false;
  let emailUsuario = email;
  error = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
    emailUsuario
  );
  return error;
}

function emailVacio(email) {
  let error = false;
  let emailUsuario = email;
  if (emailUsuario === "") {
    error = true;
  }
  return error;
}