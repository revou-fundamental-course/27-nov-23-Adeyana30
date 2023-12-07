function addNumbers() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    // Check if the input is valid
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        // Perform addition
        var sum = num1 + num2 + num3;

        // Display the result
        document.getElementById("result").innerHTML = "Kelilingnya adalah = " + sum;
    } else {
        // Display an error message for invalid input
        document.getElementById("result").innerHTML = "Input sisi A, B, dan C, sebelum menghitung Keliling.";
    }
}

function deleteResult() {
     // Delete inputan
     document.getElementById("num1").value = "";
     document.getElementById("num2").value = "";
     document.getElementById("num3").value = "";
    // Clear the result
    document.getElementById("result").innerHTML = "";
}