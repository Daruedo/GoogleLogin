function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential)
    fullName.textContent = data.name
    sub.textContent = data.sub
    given_name.textContent = data.given_name
    family_name.textContent = data.family_name
    email.textContent = data.email
    verifiedEmail.textContent = data.email_verified
    picture.setAttribute("src", data.picture)
}

function clientId() {
    return "152375759040-i50s79m3cvu0tf36dac66iq5grjel37p.apps.googleusercontent.com"
}

window.onload = function () {
google.accounts.id.initialize({
    client_id: clientId(),
    callback: handleCredentialResponse
});
google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { 
        theme: "filled_black", 
        size: "large",
        type: "standard",
        shape: "pill",
        text: "continue_with",
        logo_alignment: "left",
        width: "300",
    }  // customization attributes
);
google.accounts.id.prompt(); // also display the One Tap dialog
}