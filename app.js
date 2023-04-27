const { read } = require('./crud/read');
const {create}=require('./crud/create');
const {update}=require("./crud/update");
const data = process.argv;

const comand = (comando, param1, param2) => {
  
    switch (comando) {
        case "read":
            console.log(read());
            break;
        case "create":
            create(param1,param2);
            //funcion para crear una tarea
            break;
        case "delete":
            // funcion para eliminar una tarea
            break;
        case "update":
            console.log(update());
        default:
            console.log("no se encontro ningun comando que conincida ");
            break;
    }

}
comand(data[2], data[3], data[4]);