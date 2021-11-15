
var simpson_charecters = '[ { "name":"Lisa", "age":10, "parent":["Homer"," Marge"], "hair":"blond", "checked":true, "icon":"simpsonsIcons lisa" }, { "name":"Bart", "age":9, "parent":["Homer"," Marge"], "hair":"blond", "checked":false, "icon":"simpsonsIcons bart" }, { "name":"Maggie", "age":2, "parent":["Homer"," Marge"], "hair":"black", "checked":true }, { "name":"Patty", "age":37, "parent":["Jacqueline"], "hair":"blond", "checked":true }, { "name":"Selma", "age":38, "parent":["Jacqueline"], "hair":"blond", "checked":false }, { "name":"Rod", "age":9, "parent":["Ned"], "hair":"blond", "checked":true }, { "name":"Todd", "age":8, "parent":["Ned"], "hair":"blond", "checked":true }, { "name":"Abe", "age":65, "parent":["Root"], "hair":"none", "checked":true },{ "name":"Mona", "age":65, "parent":["Root"], "hair":"none", "checked":false }, { "name":"Jacqueline", "age":63, "parent":["Root"], "hair":"none", "checked":true }, { "name":"Homer", "age":42, "parent":["Abe"," Mona"], "hair":"none", "checked":false, "icon":"simpsonsIcons homer", "enabled": false },{ "name":"Marge", "age":35, "parent":["Jacqueline"], "hair":"blond", "checked":true, "icon":"simpsonsIcons marge" }, { "name":"Ned", "age":40, "parent":["Root"], "hair":"none", "checked":true }, { "name":"Apu", "age":40, "parent":["Root"], "hair":"black", "checked":true }, { "name":"Manjula", "age":40, "parent":["Apu"], "hair":"brown", "checked":false}]'




function Cargar_datos() { 

    var obj_simpson_charecters = JSON.parse(simpson_charecters);

    let tabla = document.getElementById('tablaDatos').getElementsByTagName("tbody")[0];
                
    for (var i = 0; i < obj_simpson_charecters.length; i++) {
        var row = tabla.insertRow(i);
        var cell = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        cell.innerHTML = obj_simpson_charecters[i].name;
        cell1.innerHTML = obj_simpson_charecters[i].age;
        cell2.innerHTML = obj_simpson_charecters[i].hair;
        cell3.innerHTML = obj_simpson_charecters[i].parent;
        cell4.innerHTML = obj_simpson_charecters[i].icon;
                
     };
               
}


function parientes() {
    var obj_simpson_charecters = JSON.parse(simpson_charecters);

    let tabla = document.getElementById('tablaDatos').getElementsByTagName("tbody")[0];

    for (var i = 0; i < obj_simpson_charecters.length; i++) {
        var row = tabla.insertRow(i);
        var cell_ = row.insertCell(0);
        var cell_1 = row.insertCell(1);
        var cell_2 = row.insertCell(2);
        var cell_3 = row.insertCell(3);
            
        cell_.innerHTML = obj_simpson_charecters[i].name;
        cell_1.innerHTML = " ";
        cell_2.innerHTML = " ";
        cell_3.innerHTML = obj_simpson_charecters[i].parent.length;
               
    };
}



function buscar() {
    var obj_simpson_charecters = JSON.parse(simpson_charecters);

    let tabla = document.getElementById('tablaDatos').getElementsByTagName("tbody")[0];

    let name_S = document.getElementById('full_name').value;
    name_S = name_S.charAt(0).toUpperCase() + name_S.slice(1);

     for (var i = 0; i < obj_simpson_charecters.length; i++) {

         if (obj_simpson_charecters[i].name.search(name_S) > -1) {
                    
                
            var row = tabla.insertRow(name_S);
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            
            cell.innerHTML = obj_simpson_charecters[i].name;
            cell1.innerHTML = obj_simpson_charecters[i].age;
            cell2.innerHTML = obj_simpson_charecters[i].hair;
            cell3.innerHTML = obj_simpson_charecters[i].parent;
            cell4.innerHTML = obj_simpson_charecters[i].icon;
        };
                            
    };
}


function color_hair() {
    var obj_simpson_charecters = JSON.parse(simpson_charecters);

    let tabla = document.getElementById('tablaDatos').getElementsByTagName("tbody")[0];

    let color_h = document.getElementById('color_hair').value;
    

     for (var i = 0; i < obj_simpson_charecters.length; i++) {

         if (obj_simpson_charecters[i].hair.search(color_h) > -1) {

                 
            var row = tabla.insertRow(color_h);
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            
            cell.innerHTML = obj_simpson_charecters[i].name;
            cell1.innerHTML = obj_simpson_charecters[i].age;
            cell2.innerHTML = obj_simpson_charecters[i].hair;
            cell3.innerHTML = obj_simpson_charecters[i].parent;
            cell4.innerHTML = obj_simpson_charecters[i].icon;
         };  
     };
}

        