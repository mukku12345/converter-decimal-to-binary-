var  input =document.getElementById("input");
var result =document.getElementById('result');
var inputType =document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var optionFrom,optionTo;

//Adding EventListener

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// Taking intial value

optionFrom =inputType.value;
optionTo  =resultType.value;

function myResult(){

    optionFrom =inputType.value;
    optionTo= resultType.value;

    // if(input.value==='')
    // result.value='';

if(optionFrom ==="decimal" && optionTo==="binary"){
    // function dec2bin(dec){
    //     return (dec >>> 0).toString(2);
    //   } 
    result.value =Number(input.value>>>0).toString(2)

}else if(optionFrom==="decimal" && optionTo==="hexadecimal"){
  result.value =Number(input.value>>>0).toString(16)
 

}else if(optionFrom==="decimal" && optionTo==="octal"){
    result.value =Number(input.value>>>0).toString(8)

}
else if(optionFrom==="decimal" && optionTo==="decimal"){
    result.value =input.value;

}

//binary to decimal hex octal converting

if(optionFrom==="binary" && optionTo==="decimal"){
    result.value=parseInt(Number(input.value),2).toString(10)
}else 
if(optionFrom==="binary" && optionTo==="hexadecimal"){
    result.value=parseInt(Number(input.value),2).toString(16)
}else
if(optionFrom==="binary" && optionTo==="octal"){
    result.value=parseInt(Number(input.value),2).toString(8);
 }
 else
if(optionFrom==="binary" && optionTo==="binary"){
    result.value=input.value;
}

// hexadecimal to binary decimal octal converting


if(optionFrom==="hexadecimal" && optionTo==="decimal"){
    result.value=parseInt(String(input.value),16).toString(10);
}else
if(optionFrom==="hexadecimal" && optionTo==="octal"){
    result.value=parseInt(String(input.value),16).toString(8);
    
}else
if(optionFrom==="hexadecimal" && optionTo==="binary"){
    result.value=parseInt(String(input.value),16).toString(2);

    
}else
if(optionFrom==="hexadecimal" && optionTo==="hexadecimal"){
    result.value=result.value;


}


//octal to decimal binary hexadecimal converting
if(optionFrom==="octal" && optionTo==="decimal"){
    result.value=parseInt(Number(input.value),8).toString(10);
}else
if(optionFrom==="octal" && optionTo==="hexadecimal"){
    result.value=parseInt(Number(input.value),8).toString(16);
    
}else
if(optionFrom==="octal" && optionTo==="binary"){
    result.value=parseInt(Number(input.value),8).toString(2);
    
}else
if(optionFrom==="octal" && optionTo==="octal"){
    result.value=result.value;


}
}

function refresh(){
    window.location.reload("Refresh");
    window.inputType.reload("Refresh");
}

function swap(){
    var temp;
    temp = inputType.value;
    inputType.value =resultType.value;
    resultType.value =temp;

     var key;
    key = input.value;
    input.value =result.value;
    result.value =key;
}
