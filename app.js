const {argv}=require('./config/yargs');
const{crearArchivo,listarTabla}=require('./multiplicar/multiplicar');
const colors = require('colors');
console.log(`Base:${argv.base}`);
console.log(`Limite:${argv.limite}\n`);
let comando=argv._[0];
switch(comando){
    case 'listar':
        console.log('Listar'.blue);
        listarTabla(argv.base,argv.limite)
            .then(archivo=>console.log(archivo.blue))
            .catch(e=>console.log(e.red));
        break;
    case 'crear':
        console.log('Crear'.blue);
        crearArchivo(argv.base,argv.limite)
            .then(archivo=>{console.log(`Archivo creado: ${archivo[0].red}\n`.green)})
            .catch(e=>console.log(e));
        break;
    default:console.log('Comando no reconocido');

}

//git init
//git status
//git add . el punto es para especificar todos los archivos
//git commit -m "Commit inicial"



