let lists = document.getElementsByClassName(`list`);
let leftBox = document.getElementById(`left`);
let righttBox = document.getElementById(`right`);

for(list of lists){
    list.addEventListener(`dragstart`,function(e){
         let selected = e.target;
         righttBox.addEventListener(`dragover`,function(e){
            e.preventDefault();
        })
        righttBox.addEventListener(`drop`,function(){
            righttBox.appendChild(selected);
        })

        leftBox.addEventListener(`dragover`,function(e){
            e.preventDefault();
        })
        leftBox.addEventListener(`drop`,function(){
            leftBox.appendChild(selected);
        })
    });



}