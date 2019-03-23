(function(){
    
    window.onload = function(){
        
        function* myGen(){
            let a = yield "apple";
            let b = yield "pear";
            let c = yield "orange";
            
            return `DOne: ${a} : ${b} : ${c}`;
        }
        
        
        let gen = myGen();
        
        cl( gen.next() )
        cl( gen.next(10) )
        cl( gen.next(20) )
        cl( gen.next(30) )
        
//        function proc(cond){
//            let i = cond;
//            
//            return new Promise((resolve, reject) => {
//                if(i){
//                    setTimeout(()=>resolve("default data"), 1000);
//                } else {
//                    reject("SOme error");
//                }
//                
//            });
//        }
//        
//        proc(true).then(data => {
//            console.log(`Data: ${data}`);
//            return proc(true);
//        }).then(data => {
//            console.log(`Data: ${data}`);
//            return proc(true);
//        }).then(data => {
//            console.log(`Data: ${data}`);
//            return proc(true);
//        })
//        .catch(err => cl(`Error: ${err}`));
//        
        
        function timeout(f, ms){
            setTimeout(function(){
                let ts = +new Date();
                for(let i=0;;i++){
                    if(+new Date - ts >= ms){
                        f();
                        break;
                    }
                }
            }, 0);

        }
        
        //-------------
        
        function gg(){
            console.log("hi");
        }

        
        function defer(f, ms){
             return function(){
                setTimeout(() => f.apply(this, arguments), ms);
            }
        }
        
        
        
    
    }
})();