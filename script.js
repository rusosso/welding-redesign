window.onbeforeunload = function load()
{
	window.scrollTo(0, 0);
}

function intronext()
{
	
	document.getElementById("introcontaineroverlay").style.opacity="1";
	document.getElementById("griddivlettersoverlay").style.borderColor="white";
	document.getElementById("div8").style.opacity="0";
	document.getElementById("introgrid").style.transform="scale(60%)";
	setTimeout(introcontentloose,500);
}

function introcontentloose()
{
	document.getElementById("div8").style.transform="translateY(-100vh)";
	document.getElementById("griddivlettersoverlay").style.background="rgba(0,0,0,0.5)";
	document.getElementById("introcontainer").style.animation="none";
	document.getElementById("introgrid").style.transform="scale(60%) translateY(-10vh)";
	document.getElementById("introgrid").style.position="fixed";
	document.getElementById("introarrow").style.opacity="1";
	document.getElementById("body").style.overflowY="auto";
	document.getElementById("introarrow").style.opacity="1";
	setTimeout(introarrow_animation,500);
}

function introarrow_animation()
{
	document.getElementById("introarrow").style.animation="introarrow 3s infinite";
	setTimeout(scroll,50);
}

function block1_scroll_animation()
{
	if(window.innerHeight*2.2 <= window.scrollY)
	{
		document.getElementById("content1").style.transform="scale(200%)";
		document.getElementById("block1").style.backgroundColor="white";
		document.getElementById("block1_cover").style.opacity="1";
	}
	else
	{
		document.getElementById("content1").style.backgroundColor="";
		document.getElementById("block1_cover").style.opacity="";
		document.getElementById("content1").style.transform="";
		document.getElementById("block1").style.backgroundColor="";
	}
	
	setTimeout("block1_scroll_animation()", 10);
}


var display1_active=false;
var display2_active=false;
var display3_active=false;

function display1()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo1").style.transform="scale(90%)";
	document.getElementById("photo1").style.top="0";
	document.getElementById("photo1").style.left="7px";
	document.getElementById("photo1").style.width="90%";
	document.getElementById("photo1").style.height="100%";
	document.getElementById("photo1").style.zIndex="9";
	document.getElementById("photo1").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display1_active=true;
	}
	else if(display1_active==true)
	{
		document.getElementById("photo1").style.transform="";
		document.getElementById("photo1").style.top="";
		document.getElementById("photo1").style.left="";
		document.getElementById("photo1").style.width="";
		document.getElementById("photo1").style.height="";
		document.getElementById("photo1").style.zIndex="";
		document.getElementById("photo1").style.boxShadow="";
		document.getElementById("photo1").style.textAlign="center";
		document.getElementById("photo1").style.fontSize="50px";
		document.getElementById("photo1").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display1_active=false;
	}
}

function display2()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo2").style.transform="scale(90%)";
	document.getElementById("photo2").style.top="0";
	document.getElementById("photo2").style.left="7px";
	document.getElementById("photo2").style.width="90%";
	document.getElementById("photo2").style.height="100%";
	document.getElementById("photo2").style.zIndex="9";
	document.getElementById("photo2").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display2_active=true;
	}
	else if(display2_active==true)
	{
		document.getElementById("photo2").style.transform="";
		
		document.getElementById("photo2").style.top="";
		document.getElementById("photo2").style.left="";
		document.getElementById("photo2").style.width="";
		document.getElementById("photo2").style.height="";
		document.getElementById("photo2").style.zIndex="";
		document.getElementById("photo2").style.boxShadow="";
		document.getElementById("photo2").style.textAlign="center";
		document.getElementById("photo2").style.fontSize="50px";
		document.getElementById("photo2").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display2_active=false;
	}
}

function display3()
{
	if(display1_active==false && display2_active==false && display3_active==false)
	{
	document.getElementById("photo3").style.transform="scale(90%)";
	document.getElementById("photo3").style.top="0";
	document.getElementById("photo3").style.left="7px";
	document.getElementById("photo3").style.width="90%";
	document.getElementById("photo3").style.height="100%";
	document.getElementById("photo3").style.zIndex="9";
	document.getElementById("photo3").style.boxShadow="0 50px 30px 30px rgba(0,0,0,.1)";
	display3_active=true;
	}
	else if(display3_active==true)
	{
		document.getElementById("photo3").style.transform="";
		document.getElementById("photo3").style.top="";
		document.getElementById("photo3").style.left="";
		document.getElementById("photo3").style.width="";
		document.getElementById("photo3").style.height="";
		document.getElementById("photo3").style.zIndex="";
		document.getElementById("photo3").style.boxShadow="";
		document.getElementById("photo3").style.textAlign="center";
		document.getElementById("photo3").style.fontSize="50px";
		document.getElementById("photo3").innerHTML="<i class='demo-icon icon-ok-circled'></i>";
		display3_active=false;
	}
}

var message_clicked=false

function message_click()
{
	if(message_clicked==false)
	{
	document.getElementById("block3").style.transform="translate(100vw)"
	message_clicked=true;
	}
	else
	{
	document.getElementById("block3").style.transform=""
	message_clicked=false;
	}
}