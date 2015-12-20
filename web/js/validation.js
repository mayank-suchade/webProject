function formValidation()  
{  
var uid = document.registration.userid;  
var passid = document.registration.passid;  
var uemail = document.registration.email;  

if(userid_validation(uid,5,12))  
{  
	if(passid_validation(passid,7,12))  
	{   
		if(ValidateEmail(uemail))  
		{  
							  
		}   
	  
	}
	
}  
return false;  
  
} 

function userid_validation(uid,mx,my)  
{  
	var uid_len = uid.value.length;  
	if (uid_len == 0 || uid_len >= my || uid_len < mx)  
	{  
		alert("User Id should not be empty / length be between "+mx+" to "+my);  
		uid.focus();  
		return false;  
	}
	return true;  
}  
function passid_validation(passid,mx,my)  
{  
	
	var passid_len = passid.value.length;  
	if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
	{  
		alert("Password should not be empty / length be between "+mx+" to "+my);  
		passid.focus();  
		return false;  
	} 
	return true;  
}  
  
function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
		Parse.initialize("5YUVGX1bJYTAPTMuqvbwvdZ1Wcp7l03qVTAQX8YO", "pztd63q08y9WBBpFkIVOzJsjUP6dMA4ReRIy0NVY");
		var userid = document.getElementById('userid').value;
		var passid = document.getElementById('passid').value;
		var email = document.getElementById('email').value;
		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({userid: "\""+userid+"\""});
		testObject.save({email: "\""+email+"\""});
		testObject.save({passid: "\""+passid+"\""}).then(function(object) {
		//alert("yay! it worked");
		});
		
		
		/*
		var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({userid: "\""+userid+"\""});
		testObject.save({email: "\""+email+"\""});
		testObject.save({passid: "\""+passid+"\""}).then(function(object) {
			alert("yay! it worked");
		});
		*/
		alert('Sign up Succesfull..!');  
		//window.location.reload();
		
		return true;  
	}  
	else  
	{  
		alert("You have entered an invalid email address!");  
		uemail.focus();  
		return false;  
	}  
}

function ValidateUser(){
	var uid = document.registration.userid;  
	var passid = document.registration.passid; 
	if(uid == "ashish123" && passid =="1234567"){
		alert("Authentication succesfull..!");
		window.location.assign(welcome.html);
	}
	else{
		alert("Please check userid or password.!");
		window.location.reload();
	}
	
}  

