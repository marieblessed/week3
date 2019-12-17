function arraySort(bluesarray=[]){
//your code here
if(typeof bluesarray ==='number'){
    return 'invalid input';
}
else if(typeof bluesarray === 'string'){
    return 'invalid input';
}
 
else 
{
 
    object={
    evennumbers:[],
    oddnumbers:[],
    chars:[]
    };

function Sort_this(a,b){
    return a > b ? 1 : b > a ?-1 : 0;
}
for ( let i = 0 ; i < bluesarray.length ; i++){
    if(bluesarray[i] % 2===0){
        object.evennumbers.push(bluesarray[i]);
    }
    else if (bluesarray[i] % 2 === 1){
       
        object.oddnumbers.push(bluesarray[i]);
    }
    else{
        object.chars.push(bluesarray[i]);
    }
        object.evennumbers.sort(Sort_this);
        object.oddnumbers.sort(Sort_this);
        object.chars.sort(Sort_this);
        return object;
        
    }
}
}


module.exports = arraySort;