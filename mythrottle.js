function mythrottle(fn, interval,{leading = true,tailing = false} = {}) {
    let starttime = 0;
    let timer = null;
    let _throttle = function(...args){
    let nowTime = new Date().getTime();

    if(!leading  && starttime === 0){
        starttime = nowTime;
    }

    let waittime = interval - (nowTime - starttime);
    if(waittime <= 0){
        timer && clearTimeout(timer);
        fn.apply(this,args);
        starttime = new Date().getTime();
        return;
    }

    if(tailing && !timer){
        timer = setTimeout(()=>{
            fn.apply(this,args);
            starttime = new Date().getTime();
        },waittime);

    }

    }
    return _throttle;
}