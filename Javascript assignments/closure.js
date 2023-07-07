function counter(){
    var count = 1;
    return `original count: ${count}, new count: ${add(count)}`;


    function add(count){
        count += 1;
        return (count);
    }

}

var result = counter(1);

console.log(result)