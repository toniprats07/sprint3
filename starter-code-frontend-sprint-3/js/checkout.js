
// Exercise 7
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Expresiones regulares
	var nameRegex = /^[a-zA-Z]+$/;
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var phoneRegex = /^\d+$/;
	var passwordRegex = /^[a-zA-Z]+[0-9]+$/;

	
	// Validate fields entered by the user: name, phone, password, and email
  
	// Validar nombre
	if (fName.value === "" || fName.value.length < 3 || !nameRegex.test(fName.value)) {
		fName.classList.add("is-invalid");
		errorName.style.display = "";
		error++;
	} else {
		fName.classList.add("is-valid");
	}
  
	// Validar apellido
	if (fLastN.value === "" || fLastN.value.length < 3 || !nameRegex.test(fLastN.value)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "";
		error++;
	} else {
		fLastN.classList.add("is-valid");
	}
  
	// Validar email
	if (fEmail.value === "" || !emailRegex.test(fEmail.value)) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "";
		error++;
	} else {
		fEmail.classList.add("is-valid");
	}

	// Validar Password
	if (fPassword.value === "" || !passwordRegex.test(fPassword.value)) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "";
		error++;
	} else {
		fPassword.classList.add("is-valid");
	}
  
	// Validar dirección
	if (fAddress.value === "") {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "";
		error++;
	} else {
		fAddress.classList.add("is-valid");
	}
  
	// Validar teléfono
	if (fPhone.value === "" || !phoneRegex.test(fPhone.value)) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "";
		error++;
	} else {
		fPhone.classList.add("is-valid");
	}
	
	if(error>0){
		return false;
	}else{
		return true;
	}
}