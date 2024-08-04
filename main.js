let lists = document.getElementsByClassName(`list`);
let leftBox = document.getElementById(`left`);
let righttBox = document.getElementById(`right`);

for(list of lists){
    list.addEventListener(`dragstart`,function(e){
         selected = e.target;
         righttBox.addEventListener(`dragover`,function(e){
            e.preventDefault();
        })
    });
    righttBox.addEventListener(`drop`,function(){
        righttBox.appendChild(selected);
    })

}