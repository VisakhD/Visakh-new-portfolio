var msg , realname , email, phoneStatus ;


function namevalidation(){
	var name=$('#inputName').val()
	var letters = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/
	if(name==""){
		$("#namestatus").html("Field is required")
		realname= false
	}
	else if(name==" "){
		$('#namestatus').html("Do not enter space as first character")
		realname=false
	}
	else if(name.length < 3)
	{
	     $('#namestatus').html("Minimum 3 characters required");
       realname=false;
    	}


        else if(name.length>20){
            $('#namestatus').html("20 characters maximum");
            realname= false;
        }
     
        else if(name.match(letters)){
            $('#namestatus').html("")
            realname=true
        }
        
        
}

function emailValid() {
    var name=$('#inputEmail').val()
    var letters = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(name==""){
        $('#emailstatus').html("Filed is required")
        email=false;
    }
    else if(name.match(letters)){
        $('#emailstatus').html("")
        email=true;
    }
    else{
        $('#emailstatus').html("Invalid Entry")
        email=false;
    }

}
function PhoneValid(){
    var phone=$('#inputNumber').val()
	var letters = /^\d+$/;
	if(phone==""){
		$('#phonestatus').html("Field is required")
    phoneStatus= false
	}
	else if(phone.match(letters) && ( phone.length == 10))
	{
    console.log("jndf")
    	$("#phonestatus").html("")
      phoneStatus= true
	}
  else if(phone.length<10)
        {
            if(phone.match(letters))
            {
              $("#phonestatus").html("Type ten numbers")
              phoneStatus= false;

            }
            else
            {
              $("#phonestatus").html("Use only numbers")
              phoneStatus=false;
            }
         }
    else if(phone.length>10)
    {
        if(phone.match(letters))
        {
          $("#phonestatus").html("Only ten numbers allowed")
          phoneStatus=false;
        }
        else
        {
          $("#phonestatus").html("Use only numbers")
          phoneStatus= false;
        }
    
    }
    else{
      $("#phonestatus").html("Invalid number")
      phoneStatus=false;
    }
  }
  function  MessageValid(){
    var name = $('#inputMessage').val()
  
    if (name == "") {
      $('#messageSpan').html("Field is required")
        msg= false;
    }
  
    else if(name.length<10){
      $('#messageSpan').html("Enter minimum 10 characters")
      msg= false;
  }
  
     else if(name.length>150){
      $('#messageSpan').html("200 characters maximum")
         msg= false;
     }
  
    else {
      $('#messageSpan').html("")
        msg= true;
    }
  
  }
 


