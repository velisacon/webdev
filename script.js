let lists = document.getElementsByClassName("list");
let oneBox = document.getElementById("one");
let twoBox = document.getElementById("two");
let threeBox = document.getElementById("three");
let fourBox = document.getElementById("four");
let leftBox = document.getElementById("left");
for(list of lists)
{
    list.addEventListener("dragstart",function(e){
        let selected = e.target;
        
        oneBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        oneBox.addEventListener("drop", function(e){
            oneBox.appendChild(selected);
            selected=null;
        });
        twoBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        twoBox.addEventListener("drop", function(e){
            twoBox.appendChild(selected);
            selected=null;
        });

        threeBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        threeBox.addEventListener("drop", function(e){
            threeBox.appendChild(selected);
            selected=null;
        });

        fourBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        fourBox.addEventListener("drop", function(e){
            fourBox.appendChild(selected);
            selected=null;
        });

     
    })  
}