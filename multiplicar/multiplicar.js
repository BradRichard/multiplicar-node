const fs=require('fs');
const os=require('os');
const colors=require('colors')
let listarTabla=async(base,limite)=>{
    let data=await crearArchivo(base,limite);
    return `============\n${data[0]}\n============`.green+`\n=============\n${data[1]}============`.red+ `\n============`.green;;

}
let crearArchivo=async(base,limite)=>{
    let data='';
    let tipo=typeof base;
    if(!tipo.match(/^n/i) && !Number(base)){throw(`No se puede trabajar con: ${base}`);}else{
        for(let i=1;i<=limite;i++){
            data+=`${base}*${i}=${base*i}\n`;
        }
        fs.writeFile(`archive/tabla-${base}.txt`,`${os.hostname()}\n${data}`,e=>{
            if(e){throw(e)}
        });
        return [`tabla-${base}.txt`,data];
    }
};
module.exports = {
    crearArchivo,
    listarTabla
}
