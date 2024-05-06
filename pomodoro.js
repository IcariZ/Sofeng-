var timer;
var ele = document.getElementById('jam');
console.log("SCRIPT MASUK");
var durasi = 0;

(function(){
    if (!durasi)
    {
        alert("Durasi kosong")
    }
    else
    {
        // timer = setInterval(()=>{
        //     ele.innerHTML = '00:'+sec;
        //     sec--;
        // },1000)
    }

})()


function tambah()
{
    durasi = durasi + 300; //5 menit
    
    var detik   = 0;
    var menit   = 0;
    var jam     = 0;

    if (durasi > 60)
    {
        detik = durasi%60;
        menit = Math.floor(durasi/60);
        if (menit > 60)
        {
            jam++;
            menit =0;
        }
    }
    alert("Durasi : "+jam+":"+menit+":"+detik);
}
function pause()
{
    clearInterval(timer);
}

function start()
{
    
}