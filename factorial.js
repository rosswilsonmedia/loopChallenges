var product;
for(i=1;i<=12;i++){
    if(!product){
        product=i;
    }else{
        product*=i;
    }
}
console.log(product);