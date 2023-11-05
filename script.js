function intronext()
{
	document.getElementById("body").style.transform="translateY(-100vh)";
	document.getElementById("introgrid").style.opacity="0";
	setTimeout(introcontentloose,1000);
}

function introcontentloose()
{
	document.getElementById("introcontainer").innerHTML=" ";
	document.getElementById("introcontainer").style.animation="none";
}