


let std={male:{names:"",age:"",address:""},female:{names:"",age:"",address:""}};

console.log(std);




let bbr=document.querySelector("#btr7");


let in4=document.querySelector("#ar");
let in5=document.querySelector("#tt");
let in6=document.querySelector("#ss");

let in7=document.querySelector("#ge");

let b=age.value;
let c=address.value;

bbr.addEventListener("click",function () {
  if (in7.value=="male") {
    
  let a=in4.value;
  std.male[a]={name:in4.value,age:in5.value,add:in6.value}
   


  } else {
    
  let a=in4.value;
  std.female[a]={name:in4.value,age:in5.value,add:in6.value}
   


  }
  

});



let in1=document.querySelector("#nn");
let in2=document.querySelector("#aa");
let in3=document.querySelector("#dd");
let h=document.querySelector("h1");

let inn=document.querySelector("#ll");

let sav=document.querySelector("#sav")
let search=document.querySelector("#search");



sav.addEventListener("click",function () {

    let s=search.value;
   std.male[s];
   in1.value=std.male[s].name;
   in2.value=std.male[s].age;
   in3.value=std.male[s].add;
   inn.value=in7.value;
   std.male[s].name="";
   std.male[s].age="";
   std.male[s].add="";
   std.male[s].gender="";
  
});
let sm=document.querySelector("#sm");
let h3=document.querySelector("#hh3");

console.log(h3);

let pa="ssz";
console.log(ssz);




sm.addEventListener("input",function cc() {


  h3.value="hello";
 return bb()+pa[2]

function bb() { return aa()+pa[1]
  
}; function aa() {
  pa[0]=h3.value
  
} 
});


 let su=document.querySelector("#su");
 let jk=document.querySelector("#jk");
 let pp=document.querySelector("#pp");
 let po=document.querySelector("#po");
 let hk=document.querySelector("#hk");
let z=0;
console.dir(su);
console.dir(jk);

su.addEventListener("click",function () {
  z++
  hk.textContent=z;
  backgroundColor="blue";
});

jk.addEventListener("click",function () {
  z--
  hk.textContent=z;
  backgroundColor="red";
});



let qu=document.querySelectorAll(".button")
console.dir(qu);





let inp5=document.querySelector("#displ");
console.dir(inpuu);
let buy5=document.querySelector("#by");
console.dir(buty);

let aa = document.getElementById("display");

function plus(value) {
  aa.value +=value;
}

function plus1() {
  aa.value=eval(aa.value)
};

function plus0() {
  aa.value="";
};

buy5.addEventListener("click",function () {
  inp5.value=eval(inp.value)
  
});


