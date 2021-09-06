function retornarfecha(){
    var fecha;
    fecha=new Date();
    var cadena=fecha.getDate()+'/'+(fecha.getMonth()+1+'/'+fecha.getUTCFullYear);
    return cadena;

}
function retornarhora(){
    var fecha;
    fecha=new Date();
    var cadena=fecha.getHours()+'/'+(fecha.getMinutes()+1+'/'+fecha.getUTCSeconds);
    return cadena;

}