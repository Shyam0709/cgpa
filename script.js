function calci(){
    var eng=parseFloat(document.getElementById('eng').value);
    var ma=parseFloat(document.getElementById('ma').value);
    var ph=parseFloat(document.getElementById('ph').value);
    var ev=parseFloat(document.getElementById('ev').value);
    var epl=parseFloat(document.getElementById('epl').value);
    var ca=parseFloat(document.getElementById('ca').value);
    var ed=parseFloat(document.getElementById('ed').value);
    var cd=parseFloat(document.getElementById('cd').value);
    var tam=parseFloat(document.getElementById('tam').value);
    var cal=document.querySelector('.cal');
    var total=((eng*3)+(ma*4)+(ph*3)+(ev*3)+(epl*2)+(ca*3)+(ed*3)+(cd*2)+(tam*1))/24;
    cal.innerText="SGPA: "+total;





}
