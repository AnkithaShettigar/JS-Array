const Find_Sum = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc+curr);
return result;
};