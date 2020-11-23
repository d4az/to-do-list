
var close = document.getElementsByClassName("close");
var i;
 
var listvalue = document.getElementsByTagName("LI");
var j;

for(j = 0 ; j  < listvalue.length ; j=j+1 )
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listvalue[j].appendChild(span)
}


for(i = 0;i < close.length ;i++)
   {
       close[i].onclick = function()
         {
             var div = this.parentElement;
             div.style.display = "none";
         }
    }



function add()
{
    $txt = document.getElementById("value").value;
    $ul = document.getElementById("myUL");
    $li= document.createElement("LI");

    if($txt == '')
    {
        alert("Value shouldnot be empty");
    }
    else{
        $li.appendChild(document.createTextNode($txt));
        $li.setAttribute("class", "list-group-item");
        $ul.appendChild($li);
    }
    

for(j = 0 ; j  < listvalue.length ; j=j+1 )
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listvalue[j].appendChild(span)
}


    for(i = 0;i < 100 ;i++)
   {
       close[i].onclick = function()
         {
             var div = this.parentElement;
             div.style.display = "none";
         }
    }
}





function remshit()
{
    var listvalue = document.getElementsByTagName("LI");
    var j;

    for(j = 0 ; j  < listvalue.length ; j=j+1 )
    {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        listvalue[j].appendChild(span)
    }
}

function dlt()
{
    var close = document.getElementsByClassName("close");
    var i;
    for(i = 0;i < close.length ;i++)
    {
        close[i].onclick = function()
         {
             var div = this.parentElement;
             div.style.display = "none";
         }
    }
}
