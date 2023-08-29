function show_next(id,nextid,bar)
{
  var ele=document.getElementById(id).getElementsByTagName("input");
  var error=0;
  for(var i=0;i<ele.length;i++)
  {
    if(ele[i].type=="text" && ele[i].value=="")
  {
    error++;
  }
  }
	
  if(error==0)
  {
    document.getElementById("first_popup").style.display="none";
    document.getElementById("second_popup").style.display="none";
    document.getElementById("third_popup").style.display="none";
    $("#"+nextid).fadeIn();
    document.getElementById(bar).style.backgroundColor="rgb(16, 97, 219)";
  }
  else
  {
    alert("Fill All The details");
  }
}
function show_next_button(id,nextid,bar){
  var ele=document.getElementById(id).getElementsByTagName("button");
  if(ele){
    document.getElementById("first_popup").style.display="none";
    document.getElementById("second_popup").style.display="none";
    document.getElementById("third_popup").style.display="none";
    $("#"+nextid).fadeIn();
    document.getElementById(bar).style.backgroundColor="rgb(16, 97, 219)";
  }
  else
  {
    alert("Fill All The details");
  }
}
function show_prev(previd,bar)
{
  document.getElementById("first_popup").style.display="none";
    document.getElementById("second_popup").style.display="none";
    document.getElementById("third_popup").style.display="none";
  $("#"+previd).fadeIn();
  document.getElementById(bar).style.backgroundColor="#D8D8D8";
}
function place_order(){
  alert('Order placed')
}