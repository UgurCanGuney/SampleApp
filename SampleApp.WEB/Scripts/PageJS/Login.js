

function SignIn() {
    var username = $("#txtUsername").val();
    var password = $("#txtPassword").val();

    var GUID = "0739-E657-C4F4-98B4";
    var url = "https://api.akilliticaretim.com/api/Auth/Login";
    var data = JSON.stringify({ "Username": username, "Password": password });
   
    $.ajax({
        type: "POST",
        headers: { "GUID": GUID },
        contentType: "application/json",
        url: url,
        data: data,
        success: function (result) {

            if (result.status) {   
                createCookie("GUID", GUID);
                var beforeToken = readCookie("Token");
                if (beforeToken != undefined && beforeToken != null && beforeToken != "") {
                    eraseCookie("Token");
                    createCookie("Token", "Bearer " + result.data.token);
                    window.location = "Ürünler";
                } else {                   
                    createCookie("Token", "Bearer " + result.data.token);
                    window.location = "Ürünler";
                }
             
            } else {
                alert("Girmiş olduğunuz bilgileri kontrol edip tekrar giriş yapınız !");
            }

        },
        error: function (xhr) {
            alert("API Hatalı İstek: " + xhr.responseText);
        }

    });
}

