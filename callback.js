
// <<<<<<<<<<<<<<<<<<<<<<  Task 1  >>>>>>>>>>>>>>>>>>>>>>
function sum (x, y){
    if (x > 1){
        y = x + sum(x - 1, y);
    }else{
        x = y;
    }
    return y;
}
console.log(sum(5, 1));




function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
console.log(factorialize(4))


// <<<<<<<<<<<<<<<<<<<<<<  Task 2  >>>>>>>>>>>>>>>>>>>>>>

function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial (n - 1);
};
console.log(factorial(3))


// <<<<<<<<<<<<<<<<<<<<<<  Task 3  >>>>>>>>>>>>>>>>>>>>>>

function repeatStr (str, sum ){
    if (sum === 0){
        return "";
    }else{
        // return `${str}` + `${repeatStr (str,sum -1 )} `
        // return (str.repeat(sum))
        return repeatStr (str, sum -1) + ' ' + str
    }}
    console.log(repeatStr("test", 3))

// <<<<<<<<<<<<<<<<<<<<<<  Task 4  >>>>>>>>>>>>>>>>>>>>>>

function sum2 (v1,v2){
if (v1 == v2) {
    return v1} 

if  (v1<v2) {
    return v1+sum2(v1-1,v2);   
}
if  (v1>v2) {
    return v1+sum2(v1-1,v2);
}
}
console.log(sum2(2,5))

// <<<<<<<<<<<<<<<<<<<<<<  Task 4  >>>>>>>>>>>>>>>>>>>>>>

function sum2(x,y){
    if(x==y)
    {return x;}
    if (x<y){
        return+sum2(x+1,y);
    }
    if (x>y){
        return x+sum2(x-1,y);
    }
    }
    console.log(sum2(5,4))