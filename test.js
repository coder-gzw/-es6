function func(){
    var x = 1;

    setTimeout(()=>{
       let y = x;
       console.log(y);
    },1000);

    x=2;
   

}

func();