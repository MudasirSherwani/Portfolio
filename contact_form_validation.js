function CheckEmailCase(eEmail) {
  if (eEmail.value !== eEmail.value.toLowerCase()) {
    document.getElementById('error-msg-m').innerHTML = 'Email should be in lowercase.';
    document.getElementById('error-msg-d').innerHTML = 'Email should be in lowercase. Try Again!.';
    return false;
  }
  else {
    document.getElementById('error-msg-m').innerHTML = '';
    document.getElementById('error-msg-d').innerHTML = '';
    return true;
  }
}
CheckEmailCase();