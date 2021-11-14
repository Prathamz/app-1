let count_val=document.getElementById("count-h2")

function incCnt(){
    let new_cnt= parseInt(count_val.innerText)+1;
    document.getElementById("count-h2").innerText=new_cnt;
}
function rstCnt(){
    document.getElementById("count-h2").innerText=0;
}
function decCnt(){
    let count_val=document.getElementById("count-h2")
    let new_cnt= parseInt(count_val.innerText)-1;
    if(new_cnt>=0){
        document.getElementById("count-h2").innerText=new_cnt;
    }
    else{
        rstCnt();
    }
}