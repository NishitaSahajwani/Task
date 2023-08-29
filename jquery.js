var ok=0;
function check_fname()
{
 var f_val=$("#fname").val();
 if(f_val=="")
 {
  $("#fname").css({"border":"1px solid red"});
  $("#fname_error").text("First Name Must Be Filled!");
  $("#fname_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#fname").css({"border":"1px solid grey"});
  $("#fname_error").text("");
  $("#fname_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_lname()
{
 var l_val=$("#lname").val();
 if(l_val=="")
 {
  $("#lname").css({"border":"1px solid red"});
  $("#lname_error").text("Last Name Must Be Filled!");
  $("#lname_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#lname").css({"border":"1px solid grey"});
  $("#lname_error").text("");
  $("#lname_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_email()
{
 var email_val=$("#email").val();
 if(email_val=="" || email_val.indexOf("@")==-1 || email_val.indexOf(".")==-1)
 {
  $("#email").css({"border":"1px solid red"});
  $("#email_error").text("Email Must Be Filled And Valid!");
  $("#email_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#email").css({"border":"1px solid grey"});
  $("#email_error").text("");
  $("#email_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_address()
{
 var f_val=$("#address").val();
 if(f_val=="")
 {
  $("#address").css({"border":"1px solid red"});
  $("#address_error").text("First Name Must Be Filled!");
  $("#address_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#address").css({"border":"1px solid grey"});
  $("#address_error").text("");
  $("#address_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_address2()
{
 var f_val=$("#address2").val();
 if(f_val=="")
 {
  $("#address2").css({"border":"1px solid red"});
  $("#address2_error").text("First Name Must Be Filled!");
  $("#address2_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#address2").css({"border":"1px solid grey"});
  $("#address2_error").text("");
  $("#address2_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_town()
{
 var l_val=$("#town").val();
 if(l_val=="")
 {
  $("#town").css({"border":"1px solid red"});
  $("#town_error").text("Last Name Must Be Filled!");
  $("#town_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#town").css({"border":"1px solid grey"});
  $("#town_error").text("");
  $("#town_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}

function check_postcode()
{
 var l_val=$("#postcode").val();
 if(l_val=="")
 {
  $("#postcode").css({"border":"1px solid red"});
  $("#postcode_error").text("Last Name Must Be Filled!");
  $("#postcode_error").css({"margin-top":"5px"});
 }
 else
 {
  $("#postcode").css({"border":"1px solid grey"});
  $("#postcode_error").text("");
  $("#postcode_error").css({"margin-top":"0px"});
  ok++;
  console.log(ok)
 }
}
