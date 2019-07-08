class FormValidator {

  validateInputs(inputData) {

    let errorMsg = "";

    if(!inputData.names) {
      errorMsg +="Please enter names of this item.\n"
    }

    if(!inputData.lastNames) {
      errorMsg +="Please enter lastNames of this item.\n"
    }

    if(!inputData.birthDate.toString().match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)) {
      errorMsg +="Birth Date must be with format yyyy-mm-dd.\n"
    }

    if(inputData.documentNumber.length > 0 && !inputData.documentNumber.match(/\d[0-9]$/)) {
      errorMsg +="Document Number must be of numeric values.\n"
    }

    if(errorMsg.length === 0){
      return true;
    } else {
      alert(errorMsg);
      return false;
    }

  }

}

export default FormValidator;