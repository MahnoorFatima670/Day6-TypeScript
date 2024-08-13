//problem no:1
function calculate(a:number,b:number,operation:string)
{if(operation==="+")
    {
          return add(a,b);  
    }
    if(operation==="-")
        {
          return  sub(a,b);
        } 
        if(operation==="*")
            {    
              return  mul(a,b);
            } 
            if(operation==="/")
                {
             return   div(a,b);
                } 
                function sub(a:number,b:number):number
                { 
                    return a-b;}
                function add(a:number,b:number):number
                { 
                    return a+b;}
                function mul(a:number,b:number):number
                {
                    return a*b;}
                function div(a:number,b:number):number
                {if(b==0)
                    {
                        throw new Error('Cannot divide by zero');
                    }
                    return a/b; }}
console.log(calculate(2,99,'-'));

//problem no:2
class calculator
{
add(x:number,y:number):number
{return x+y;}
sub(x:number,y:number):number
{return x-y;}
mul(x:number,y:number):number
{return x*y;}
div(x:number,y:number):number
{return x/y;}
calculate(x:number,y:number,operation:string):number
{
    if(operation==="+")
        {
              return this.add(x,y);  
        }
        if(operation==="-")
            {
              return  this.sub(x,y);
            } 
            if(operation==="*")
                {    
                  return  this.mul(x,y);
                } 
                if(operation==="/")
                    {
                 return   this.div(x,y);
                    } }}

const cal=new calculator();
console.log(cal.calculate(2,3,'+'));
console.log(cal.calculate(5,8,'*'));














//problem2
let myArray:(number | string| boolean)[]=['hadia',9,'fatima','45',true,false,9,10,10];
let numberArray:number[]=[];
let stringArray:string[]=[];
let booleanArray:boolean[]=[];

for(let a=0;a<myArray.length;a++)
{
if(typeof myArray[a]==="number")   
{
numberArray.push(myArray[a] as number);
}

else if(typeof myArray[a]==="string")   
    {
    stringArray.push(myArray[a] as string);
    }

   else if(typeof myArray[a]==="boolean")   
        {
        booleanArray.push(myArray[a] as boolean);
        }
else
{
    console.log("invalid");
}}
console.log(`Number array is:${numberArray}`);
console.log(`String Array is :${stringArray}`);
console.log(`Boolean Array is:${booleanArray}`);



