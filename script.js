rs=new Audio("run.mp3");
rs.loop=true;
// Script js
var js=new Audio("jump.mp3");

var ds=new Audio("dead.mp3");

var ws=new Audio("win.wav");


document.getElementById("sta").style.visibility="visible";
function key(event){
    document.getElementById("sta").style.visibility="hidden";
    if(event.which==13){
        
        if(rw==0){
            
            
            fid=f();
            fw=setInterval(move,100);
            rw=setInterval(run,100);
            rs.play();
            bw=setInterval(back,100);
            sw=setInterval(score,100);
        }
       
    }
    if(event.which==32){
       // alert("space")
       document.getElementById("sta").style.visibility="visibility";
       if(jw==0){
        
        clearInterval(rw);
        rs.pause();
        rw=0;
        jw=setInterval(jump,100);
        js.play();
        rw=-1;
       }
    }
   
}
var fid=0;
var fw=0;

var p=700;


function f(){
    for(var y=0; y<10; y++){
        var a=document.createElement("img");
        a.src="flame.gif";
        a.className="f";
        a.style.marginLeft=p+"px";

        if(y<=5){
            p=p+700;
        }
        if(y>=6){
            p=p+450;
        }
        
        a.id="d"+y;
        document.getElementById("b").appendChild(a);
    }   
}                       


function move(){
    for(var y=0; y<10; y++){
        var z=getComputedStyle(document.getElementById("d"+y));
        var w=parseInt(z.marginLeft);
        w=w-20;
        document.getElementById("d"+y).style.marginLeft=w+"px";
        //alert(w);
        //40 - 120
        //260

        if(w < 100 & w > 40){
            if(mt>300){
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw=-1;
                clearInterval(fw);
                clearInterval(bw);
                clearInterval(sw);
                dw=setInterval(dead,100);
                ds.play();
            }
        }   
    }     
}

var img=document.getElementById("boy");
var rw=0;
var r=1;
function run(){
    r=r+1;
    if(r==9){
        r=1;
        
    }
    img.src="Run ("+r+").png";
}

var jw=0;
var j=1;

var mt=360;

function jump(){

    if(j<=6){
        mt=mt-25;
    }
    if(j>=7){
        mt=mt+25;
    }

    img.style.marginTop=mt+"px";
     
    j=j+1;
    if(j==13){
        j=1;
        clearInterval(jw);
        rw=setInterval(run,100);
        rs.play();
        jw=0;

        if(fid==0){
            fid=f();
        }
        if(fw==0){
            fw=setInterval(move,100);
        }
        if(bw==0){
            bw=setInterval(back,100);
        }
        if(sw==0){
            sw=setInterval(score,100);
        }
    }
    img.src="Jump ("+j+").png";
}

var bw=0;
var b=0;
function back(){
    b=b-20;
    document.getElementById("b").style.backgroundPositionX=b+"px";
}

var sw=0;
var u=0;
function score(){
    u=u+2;
    document.getElementById("score").innerHTML= +u;

    if(u==630){
        clearInterval(rw);
        rs.pause();
        clearInterval(jw);
        jw=-1;
        clearInterval(fw);
        fw=-1;
        clearInterval(bw);
        bw=-1;
        clearInterval(sw);
        sw=-1;
        ws.play();
        document.getElementById("win").style.visibility="visible";
    }
}

var dw=0;
var d=1;
function dead(){
    d=d+1;
    if(d==11){
        d=10;
        img.style.marginTop="360px";
        document.getElementById("end").style.visibility="visible";
        document.getElementById("endscore").innerHTML=u;
    }
    img.src="Dead ("+d+").png";
}

function re(){
    location.reload();
}
