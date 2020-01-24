 function reverseString() {
    // document.getElementById("num").value=num;
 	var str1=document.getElementById("num").value;
    var splitString = str1.split(""); 
    console.log(splitString);
    var reverseArray = splitString.reverse(); 
    console.log(reverseArray)
    var joinArray = reverseArray.join("");
    console.log(joinArray); 
    // if(str1==joinArray){
    // 	alert("string is palindrome");
    // }
    // else
    // {

    // 	alert("string is not a palindrome");
    // }
}
 // reverseString("hello")