const button=document.querySelector("button");
const body=document.querySelector("body");
const color = ['red','green','pink','purple','gray','blue','orange'];
console.log(body.style.backgroundColor="cyan");


button.addEventListener('click',changeB);
function changeB(){
	const colorIndex= parseInt(Math.random()*color.length);
	body.style.backgroundColor=color[colorIndex];
}