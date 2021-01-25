function bclear()
{
    document.getElementById("screen").value ="";
}

function bclick(val)
{
    document.getElementById("screen").value +=val;
}

function eclick()
{
    var exp = document.getElementById("screen").value;
    var result = eval(exp);
    document.getElementById("screen").value = result;

}