alert("asd");
$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    let valid = true;
    


    if ($("#name").val() === "" || $("#photo").val() === "") {
        valid = false;
    }
    else if ($("#q1").val() === "empty" || $("#q2").val() === "empty" || $("#q3").val() === "empty" || $("#q4").val() === "empty" || $("#q5").val() === "empty") {
        valid = false
    }

    if (valid === true) {

        let newUser = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val()
            ]
        };

        // $.post("/api/friends", newUser, function (data) {
        //     $("#friendName").html(data.name)
        //     $("#friendImage").attr("src", data.photo)
        //     $("#modal").modal("toggle")
        // });

        postRequest('/api/friends', newUser)
            .then(function(data){
                $("#friendName").html(data.name)
                $("#friendImage").attr("src", data.photo)
                $("#friendImage").addClass("animated fadeIn")
                $("#modal").modal("toggle")
            })
            
            function postRequest(url, data) {
                return fetch(url, {
                  credentials: 'same-origin', // 'include', default: 'omit'
                  method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
                  body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
                  headers: new Headers({
                    'Content-Type': 'application/json'
                  }),
                })
                .then(response => response.json())
              }


        $("#name").val("");
        $("#photo").val("");
        for (let i = 1; i < 6; i++) {
            $(`#q${i}`).val("");
        }

    }

    else {
        alert("Fill out all fields");
    }


})