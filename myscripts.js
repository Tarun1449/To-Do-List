 const tasks = JSON.parse(localStorage.getItem("persons")) ?? [];
 var indx=-1;
window.onload = function myfuntion(){
    
    indx =indx +  tasks.length;
    console.log(indx);
    tasks.forEach( (element,i) => {
        
        const d = document.createElement("div");
        d.className  = "newClass";
       
        
        document.querySelector(".T-Container").append(d);
        const n = document.createElement("span");
        const da = document.createElement("div");
        
        n.innerHTML = tasks[i].Name;
        da.innerHTML = tasks[i].date;

        n.className = "new";
        n.id = "Name";
        da.className = "new";

        const b1 = document.createElement("div");
        const b2 = document.createElement("div");

        if(tasks[i].check == false){
        b1.innerHTML = `<button  onclick='change(${i},this)',>Mark as Done</button>`;
        }else{
            b1.innerHTML = "<button>Completed</button>"
        }
        b2.innerHTML = `<button onclick="remove(${i},this)">Delete</button`

        
        d.append(n);
        d.append(da);
        d.append(b1);
        d.append(b2);

        
    });
}

function remove(a,b){
    console.log(a);
    b.parentNode.parentNode.remove();    
    tasks.splice(a,1);
    indx--;
    const newTasks = tasks;
    localStorage.removeItem("persons");
    localStorage.setItem("persons",JSON.stringify(newTasks));
    
    
}

function change(a,b){
    console.log(a);
    b.innerHTML = "Completed";
    
    tasks[a].check = true;
    
    b.style.backgroundColor = "green";
    const newtasks = tasks;
    localStorage.removeItem("persons");
    localStorage.setItem("persons",JSON.stringify(newtasks));
}


    function searchMe(){
        const filter = document.querySelector("#Search").value.toUpperCase();
        const div = document.querySelector(".T-Container");
        const span = div.getElementsByTagName("span");
        console.log(span);
        if(filter!=""){
        for(var i =0; i<span.length;i++){
            console.log(span[i].innerHTML)
            if(span[i].innerHTML.toUpperCase().indexOf(filter)>-1){
                span[i].parentNode.style.display = "flex";
            }else{
                span[i].parentNode.style.display = "none";
            }
        }
    }
}

function sortTasksByDate() {
    return tasks.sort((a, b) => {
        return new Date(a.p) - new Date(b.p);
        });
    }
  
    function sortAndReloadTasks() {
        
        const newtasks = sortTasksByDate(tasks);
        console.log(newtasks);
        localStorage.removeItem("persons")
        localStorage.setItem('persons', JSON.stringify(newtasks));
        
    }
function addTasks(){
    const n = document.createElement("span");
        const da = document.createElement("div");

    n.innerHTML = document.querySelector("#name").value;
    da.innerHTML = document.querySelector("#date").value;
    
    if(n.value !="" && da != "" ){
    indx++;

    const d = document.createElement("div");
        d.className  = "newClass";
        document.querySelector(".T-Container").append(d);
        
        
        console.log(indx);

    
        n.className = "new";
        da.className = "new";
        n.id = "Name";

        const b1 = document.createElement("div");
        const b2 = document.createElement("div");

        
        b1.innerHTML = `<button  onclick='change(${indx},this)',>Mark as Done</button>`
        
        b2.innerHTML = `<button onclick='remove(${indx},this)'>Delete</button>`

        
        d.append(n);
        d.append(da);
        d.append(b1);
        d.append(b2);
        
        const persons = {
            Name:document.querySelector("#name").value,
            date:document.querySelector("#date").value,
            check:false,
            index:indx
        }

        tasks.push(persons);
        localStorage.setItem("persons",JSON.stringify(tasks));
    }
    else{
        alert("Name and Date can't be null");
    }
}

