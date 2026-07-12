const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const dress = document.getElementById("dress");

function openInvitation() {

    cover.classList.add("hide");

    invitation.classList.add("show");

}

function showDressCode() {

    invitation.classList.remove("show");

    invitation.classList.add("hide");

    dress.classList.add("show");

}

function backInvitation() {

    dress.classList.remove("show");

    dress.classList.add("hide");

    invitation.classList.remove("hide");

    invitation.classList.add("show");

}
