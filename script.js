function SendMail(event) {
    event.preventDefault();  // Prevent the default form submission

    var params = {
        nama_program: document.getElementById("name").value,
        tarikh: document.getElementById("date").value,
        tempat: document.getElementById("place").value,
        masa: document.getElementById("time").value
    };

    emailjs.send("service_pxt70sr", "template_6gtteag", params)
        .then(function(res) {
            alert("Success! Email sent with status: " + res.status);
        })
        .catch(function(error) {
            console.error("Failed to send email. Error: ", error);
            alert("Failed to send email. Please try again later.");
        });
}
