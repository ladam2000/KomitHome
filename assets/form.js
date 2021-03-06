function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://d9f3gh1foi.execute-api.eu-west-1.amazonaws.com/prod";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#name-input").val())) {
                         alert ("Kérem adja meg a teljes nevét!");
                return;
            }
            var mobilere = /[0-9]/;
            if (!mobilere.test($("#phone-input").val())) {
                alert ("Kérem csak számokat használjon a telefonszámban!");
                return;
            }
            if ($("#email-input").val()=="") {
                alert ("Kérem adjon meg egy valós email címet!");
                return;
            }

            var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
            if (!reeamil.test($("#email-input").val())) {
                alert ("Kérem adjon meg egy valós email címet!");
                return;
            }

       var name = $("#name-input").val();
       var phone = $("#phone-input").val();
       var email = $("#email-input").val();
       var iranyitoszam = $("#postal-code").val();
       var varos = $("#city").val();
       var utca = $("#street-address").val();
       var epulet = $("#epulet").val();
       var igenyeltszolg = $("#igenyeltszolg").val();
       var desc = $("#description-input").val();
       var data = {
          name : name,
          phone : phone,
          email : email,
          iranyitoszam: iranyitoszam,
          varos: varos,
          utca: utca,
          epulet: epulet,
          igenyeltszolg: igenyeltszolg,
          desc : desc
        };

       $.ajax({
         type: "POST",
         url : "https://d9f3gh1foi.execute-api.eu-west-1.amazonaws.com/prod",
         dataType: "json",
         crossDomain: "true",
         contentType: "application/json; charset=utf-8",
         data: JSON.stringify(data),


         success: function () {
           // clear form and show a success message
           alert("Köszönjük! Hamarosan jelentkezünk!");
           document.getElementById("contact-form").reset();
       location.reload();
         },
         error: function () {
           // show an error message
           alert("Sikertelenn! Kérem próbálja meg újra!");
         }});
     }
