function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    document.getElementById("output-value").innerText=getNum(num);
}

function getNum(num){
    if(num=="") return "";
    else return Number(num);
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var array=[];
var flag=[];

function setFlag(){
    for(var i=0;i<90;i++){
        flag.push(0);
    }
}

function setArray(){
    for(var i=90;i>=1;i--){
        var output=getRndInteger(1,i);
        var t=Number(0);
        for(var j=0;j<90;j++){
            if(flag[j]==0){
                t++;
                if(t==output){
                    flag[j]=1;
                    array.push(j+1);
                    break;
                }
            }
        }
    }
}

function deleteArray(){
    array=[];
    flag=[];
}



var cur=0;
var started=0;

function myFunction() {
    var txt;
    var r=confirm("Do you want a new game ?");
    if(r==true){
        cur=0;
        started=1;
        printOutput("");
        for(var i=1;i<=90;i++){
            document.getElementById(i).style.backgroundColor = "white";
            document.getElementById(i).style.color = "black";
        }
        deleteArray();
        setFlag();
        setArray();
    } 
    else{

    }
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="previous"){
            if(cur>=2&&started==1){
                document.getElementById(getOutput()).style.backgroundColor = "white";
                document.getElementById(getOutput()).style.color = "black";
                cur--;
                printOutput(array[cur-1]);
            }
        }
        else if(this.id=="next"){
            if(cur!=90&&started==1){
                printOutput(array[cur]);
                document.getElementById(getOutput()).style.backgroundColor = "black";
                document.getElementById(getOutput()).style.color = "white";
                cur++;
            }
        }
        else{
            myFunction();
        }
    });
}