//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints
$('form span').hide();

var $password = $('#password');
var $confirmPassword = $('#confirm_password');

function passwordEvent(){
  if($(this).val().length > 8)
  {
    $(this).next().hide();
  }
  else
  {
    $(this).next().show();
  }
}

function confirmPasswordEvent(){
  if($password.val() === $confirmPassword.val())
  {
    $confirmPassword.next().hide();
  }
  else
  {
    $confirmPassword.next().show();
  }
}

function canSubmit(){
  return $password.val().length > 8 && $password.val() === $confirmPassword.val();
}

function enableSubmitEvent(){
  $('#submit').prop("disabled",!canSubmit());
}
// even handler
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//enableSubmitEvent();








