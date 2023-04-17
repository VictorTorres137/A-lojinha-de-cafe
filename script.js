
let n = "short"
let a = (n.length > 6)
let b = false
let c = false

for (item of n){
    let j = isNaN(`${item}`)

    if(j == true){
        b = true
    }else
        c = true
    
}

if ((a && b)&&(b && c)){
    console.log(true);
} else{
    console.log(false);
}

console.log(n)