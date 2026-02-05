const cup=document.getElementById("cup");

function pour(){
const coffee=document.createElement("div");
coffee.style.position="absolute";
coffee.style.bottom="0";
coffee.style.width="100%";
coffee.style.height="60%";
coffee.style.background="#3b2a1f";
cup.appendChild(coffee);
}

function steam(){
cup.style.background="#f7efe7";
}
