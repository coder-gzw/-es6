let obj = {
    name:"gzw",
    say(){
        console.log("xxx");
    }
}

function func(){
    this.say();
}

func.apply(obj);