// Elements
const form = document.querySelector("#contact-form");
const inputGroups = document.querySelectorAll(".form-group");
const successNotification = document.querySelector(".alert-box");

inputGroups.forEach((input) => {
	let inputElement = input.querySelector("input") || input.querySelector("textarea");
    let errorMessage = input.querySelector(".error-message");

    if (!inputElement) return;

    inputElement.addEventListener("input", (e) => {
        let inputType = inputElement.tagName.toLowerCase() === "textarea" ? "textarea" : inputElement.type;
        let isValid = true;

        switch (inputType) {
            case "text":
            case "textarea":
                if (inputElement.value.trim() === "") {
                    isValid = false;
                }
                break;
            case "email":
                let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (inputElement.value.trim() === "") {
                	errorMessage.textContent = "This field is required";
                    isValid = false;
                } else if (inputElement.value.trim() != "" && !emailPattern.test(inputElement.value)) {
            		errorMessage.textContent = "The email address is not formatted correctly";
                    isValid = false;
                }
                break;
            case "checkbox":
                if (!inputElement.checked) {
                    isValid = false;
                }
                break;
            case "radio":
                let radioName = inputElement.name;
                let radioGroup = document.querySelectorAll(`input[name="${radioName}"]`);
                let isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    isValid = false;
                }
                break;
        }

        if (isValid) {
            errorMessage.classList.add("hidden");
        }
    });
})

const checkAllInputForm = () => {
	let isValid = true;

	inputGroups.forEach((input) => {
		let inputElement = input.querySelector("input") || input.querySelector("textarea");
    	let errorMessage = input.querySelector(".error-message");

		if (!inputElement) return;

		let inputType = inputElement.tagName.toLowerCase() === "textarea" ? "textarea" : inputElement.type;

		errorMessage.classList.add("hidden");

		switch (inputType) {
			case "text":
			case "textarea":
				if(inputElement.value.trim() === "") {
					errorMessage.classList.remove("hidden");
					isValid = false;
				}
				break;
			case "email":
  				let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (inputElement.value.trim() === "") {
                	errorMessage.textContent = "This field is required";
  					errorMessage.classList.remove("hidden");
                    isValid = false;
                } else if (inputElement.value.trim() != "" && !emailPattern.test(inputElement.value)) {
  					errorMessage.classList.remove("hidden");
            		errorMessage.textContent = "The email address is not formatted correctly";
                    isValid = false;
                }
				break;
			case "checkbox":
				if(!inputElement.checked) {
					errorMessage.classList.remove("hidden");
					isValid = false;
				}
				break;
			case "radio":
				let radioName = inputElement.name;
                let radioGroup = document.querySelectorAll(`input[name="${radioName}"]`);
                let isChecked = Array.from(radioGroup).some(radio => radio.checked);

                if (!isChecked) {
                    errorMessage.classList.remove("hidden");
                    isValid = false;
                }
				break;
			default:
				break;
		}
	})

	return isValid;
}

const handleSubmit = (e) => {
	e.preventDefault();

    let isValid = checkAllInputForm();

	if (isValid) {
		successNotification.classList.remove("hidden");

		setTimeout(() => {
			successNotification.classList.add("hidden");
		}, 3000);
	}
}

form.addEventListener("submit", handleSubmit);