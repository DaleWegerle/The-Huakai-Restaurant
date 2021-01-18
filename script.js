function displayFunction(){
  var fname = document.getElementById("myForm").elements[0].value;
  var lname = document.getElementById("myForm").elements[1].value;
  var phone = document.getElementById("myForm").elements[2].value;
  var date = document.getElementById("myForm").elements[3].value;
  var time = document.getElementById("myForm").elements[4].value;
  var party = document.getElementById("myForm").elements[5].value;


  document.getElementById("displayfname").innerHTML = fname;
  document.getElementById("displaylname").innerHTML = lname;
  document.getElementById("displayphone").innerHTML = phone;
  document.getElementById("displaydate").innerHTML = date;
  document.getElementById("displaytime").innerHTML = time;
  document.getElementById("displayparty").innerHTML = party;
}