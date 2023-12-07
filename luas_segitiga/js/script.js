function hitungLuas() {
    // Ambil nilai alas dan tinggi dari input
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    
    // Validasi Input
    if (base === "" || height === "" || isNaN(base) || isNaN(height)) {
        document.getElementById('error').innerHTML = "Harap isi nilai Input Alas dan Tinggi !";
        document.getElementById('result').innerHTML = "";
        return;
      }

      // Convert nilai ke tipe numerik
      base = parseFloat(base);
      height = parseFloat(height);
      
        // Rumus Luas Segitiga
        var luas = 0.5 * base * height;

        // Menampilkan hasil
        document.getElementById('error').innerHTML = "";
        document.getElementById('result').innerHTML = 'Luasnya adalah = ' + luas;
    
}

function deleteResult() {
     // Delete inputan
     document.getElementById("base").value = "";
     document.getElementById("height").value = "";
    // Clear the result
    document.getElementById("result").innerHTML = "";
}