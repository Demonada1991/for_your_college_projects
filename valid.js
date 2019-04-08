function formValidation()
{
	var uid = document.registration.Insurance_id;
	var passid = document.registration.passid;
	var licensekey = document.registration.licensekey;
	var year = document.registration.year;
	var ins = document.registration.Insurance;
	if(userid_validation(uid,5,12))
	{
		if(passid_validation(passid,7,12))
		{
			if(alphanumeric(licensekey))
			{
				if(yearselect(year))
				{
					if(insurance_select(ins))
					{
					}
				}
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
 function alphanumeric(licensekey)
{
	var letters = /^[0-9, .a-zA-Z]+$/;
	if(licensekey.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('User licensekey must have alphanumeric characters only');
		licensekey.focus();
		return false;
	}
}
function yearselect(ucountry)
{
	if(ucountry.value == "Default")
	{
		alert('Select your country from the list');
		ucountry.focus();
		return false;
	}
	else
	{
		return true;
	}
}
function insurance_select(ucount)
{
	if(ucount.value == "Default")
	{
		alert('Select your country from the list');
		ucount.focus();
		return false;
	}
	else
	{
		alert('Form Succesfully Submitted');
		window.location="payment.html";
		return true;
	}
}
