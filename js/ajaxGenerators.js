window.addEventListener('load', function(){
    const cl = console.log;

    genWrapper(function* generator(){
        let birds = yield $.get("./data/birds.json");
        cl(birds);

        let rodents = yield $.get("./data/rodents.json");
        cl(rodents);

        let other = yield $.get("./data/other.json");
        cl(other);
    });

    function genWrapper(generator){
        const gen = generator();

        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(data => {
                    return handle(gen.next(data))
                });
            }
        }

        return handle(gen.next());
    }

});