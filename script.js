
const desc = document.querySelectorAll('.desc')
let items = document.querySelectorAll('.items')


function descOn(){
    desc.classList.add('descOn')

}

function descOff(){
    desc.classList.remove('descOn')
    
}
for(item of items){
    console.log(item)
    item.addEventListener("mouseover", function(){
        item.children
    })
    item.addEventListener("mouseout", descOff)
}