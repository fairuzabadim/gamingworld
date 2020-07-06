function validasi() {
    var id = document.getElementById("id").value;
    var nama = document.getElementById("nama").value;
    if (id != "" && nama!="") {
        return true;
    }else{
        alert('Harap Isi Semua Data!');
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
    }
}
