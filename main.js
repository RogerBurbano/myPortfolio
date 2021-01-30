const up = document.querySelector("#up");
        up.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        });

        $(document).ready(function () {
        $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        });

        $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')
        });

    });


/*
function submitForm(e) {
    e.preventDefault();


    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let service = document.querySelector(".service").value;
    let subject = document.querySelector(".subject").value;

    saveContactInfo(name, email, service, subject)

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, service, subject)
}

function saveContactInfo(name, email, service, subject) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        service: service,
        subject: subject
    });

    retrieveInfos();
}

function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
        let infoData = keys[i];
        let name = info[infoData].name;
        let email = info[infoData].email;
        let service = info[infoData].service;
        let subject = info[infoData].subject;
        console.log(name, email, service, subject);

        let infoResults = document.querySelector(".infoResults");

        infoResults.innerHTML += '<div>
        <p><strong>Name: </strong>${name} <br/>
        <a><strong>Email: </strong>${email}</a></br>
        <a><strong>Service: </strong>${service}</a> </br>
        <a><strong>Subject: </strong>${subject}</a> 
        </p>
        </div>';
        }
    }
}

retrieveInfos();


function sendEmail(name, email, service, subject) {
    email.send({
        Host: "smtp.gmail.com",
        Username: "ezequielgiussani56@gmail.com",
        Password: "dukaddzezeifbyjp",
        to: 'ezequielgiussani56@gmail.com',
        From: 'ezequielgiussani56@gmail.com',
        Subject: '${name} sent you a message',
        Body: 'Name: ${name} <br/> '
    })
}

*/