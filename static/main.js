function calculate() {
    var expiry = document.getElementById("expiry").value;
    var stirke = document.getElementById("strike").value;
    var spot = document.getElementById("spot").value;
    var volume = document.getElementById("volume").value;
    var r = document.getElementById("r").value;
    var numPaths = document.getElementById("numPaths").value;
    var result = 0;
    alert("Invalid input");

	$.ajax({
	    url: "/static/server.py",
        type: 'POST',
        data:  JSON.stringify(strike)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            alert(response);  
        },
        error: function () {
            alert("error");
        }
    });

    document.getElementById("result").innerHTML = "The price of your derivative is " + result;
}