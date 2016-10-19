function bgchange(obj){

        for(var i=1;i<4;i++){
            if(obj ==i){
            document.getElementById('t'+i).style.backgroundColor="#ffd200";
            document.getElementById('con'+i).style.display="block";
            }else{
            document.getElementById('t'+i).style.backgroundColor="#e6e6e6";
            document.getElementById('con'+i).style.display="none";
            }
        }
}
