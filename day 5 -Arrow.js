// Print all the odd numbers in an array (arrow functions)
var odd = (n)=>{
    var ans=[]
    for(val of n){
        if(val%2!=0)
        ans.push(val)
    }
    console.log(`Odd numbers for the given array are : ${ans}`)
}


odd(([1,2,3,4,5,6,7,8,9,10,13,20]));





// Convert all the strings to title caps in a string array

let vehicles=["beNz","auDi","bMw","jaQuar"];

const titleCaps=(str)=>{
    var ans = []
    for(string of str){
        var firstLetter = string[0].toUpperCase();
        ans.push(firstLetter+string.toLowerCase().slice(1))
       
    } console.log(ans);
}


titleCaps(vehicles);





// Sum of all numbers in an array (arrow functions)
var sum= (n)=>{
    var sum=0
    for(val of n){
        sum=sum+val;
    }
    console.log(`The sum of all the numbers in the given array is : ${sum}`)
}

sum(([1,2,3,4,5,6,7,8,9,10]));



// Return all the prime numbers in an array 

const primenumbers=(n)=>{
    var ans=[];
    for(val of n)
    {
        var count=0;
        for(var i=1;i<=val;i++)
        {
            
            if(val%i==0)
            {
               count++;
            }
           
        }
        if(count==2){
            ans.push(val)
        }
    }
    console.log(`the prime numbers in this array are : ${ans}`);
    
};

primenumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])





// // Return all the palindromes in an array

var checkForPalindrome = (string) => {
    let rev,palindrome = [];
    for(str of string)
    {
        rev=str.split("").reverse().join("");
        if(rev==str){
            palindrome.push(str);
        }
    }
    console.log(`Palindromes in the given array are : ${palindrome}`)
}

checkForPalindrome(["dad" , "mom" ,"sir" ,"malayalaM" , "malayalam"]);









