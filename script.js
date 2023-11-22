let para=document.getElementById("status");


enterBtn.addEventListener("click",function(){

	let heading=document.createElement("h1");

	heading.innerText=para.innerText;

	para.innerText="";
	para.appendChild(heading);
	
});