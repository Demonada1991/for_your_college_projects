function captgenerate()
{
    var cap= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var i;
        for (i=0;i<4;i++){
          var a = cap[Math.floor(Math.random() * cap.length)];
          var b = cap[Math.floor(Math.random() * cap.length)];
          var c = cap[Math.floor(Math.random() * cap.length)];
          var d = cap[Math.floor(Math.random() * cap.length)];
         }
       var code = "" + a + '' + b + '' + '' + c + '' + d;
       document.getElementById("captcha").value = code
}
function validatecaptcha()
{
    var string1 = removespace(document.getElementById("captcha").value);
	var string2 = removespace(document.getElementById("capt").value);
    if(string1 != string2)
	{
		alert("You've entered Wrong Captcha");
		return false;
    }
    else
	{
        var v = validateform();
		return v;
    }
}
function removespace(string)
{
        return string.split(' ').join('');
}
function validateform()
{
     var id = document.getElementById("ud");
     var psd = document.getElementById("pd");
     if(id.value=="")
	{
         alert("Please enter your User_ID");
         document.getElementById("ud").style.bordercolor="red";
		 return false;
    } 
     else if(psd.value=="")
	 {
         alert("Please Enter Password");
		return false;
     }
     else
	 {
         alert("Welcome!!");
		return true;
     }
    
}


  