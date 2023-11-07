function intronext()
{
	
	document.getElementById("introcontaineroverlay").style.opacity="1";
	document.getElementById("griddivlettersoverlay").style.borderColor="white";
	document.getElementById("div8").style.opacity="0";
	setTimeout(introcontentloose,500);
}

function introcontentloose()
{
	document.getElementById("div8").style.transform="translateY(-100vh)";
	document.getElementById("introcontainer").style.animation="none";
	document.getElementById("introgrid").style.transform="scale(60%)";
	document.getElementById("body").style.overflowY="auto";
	document.getElementById("introarrow").style.opacity="1";
}