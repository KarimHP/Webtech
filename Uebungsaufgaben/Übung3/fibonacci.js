function fibonacciNonRecursive(n)
{
   var f0 = 0; 
    var f1 = 1; 
    var result = 0; 

    if (n == 0)
    {
        return 0; 
    }
    else if (n==1)
    {
        return 1; 
    }
    //eigentliche Fibbonaci reihenfolge
    else
    {
        for (var i = 2; i <=n;i++)
        {
            result = f0 + f1; 
            f0 = f1; 
            f1 = result; 
        }

    }
    return result; 
}


function fibonacciRecursive(n)
{

    if (n == 0)
    {
        return 0; 
    }
    if (n == 1)
    {
        return 1; 
    }
    if (n>=2) 
    {
        return (fibonacciRecursive(n-1)+fibonacciRecursive(n-2));
    }

}



console.log ("Ohne Rekursion bei n = 8: " + fibonacciNonRecursive(8));
console.log("Mit Rekursion bei n = 8: " + fibonacciRecursive(8));

