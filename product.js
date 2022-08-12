const Find_Prod = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc*curr,1);
return result;
};