window.onload = function () {
    setTimeout(function () {
        document.querySelector('.spinner').style.display = 'none'; // Hide spinner
        document.getElementById('main-content').style.display = 'block'; // Show form
    }, 2000); // Delay in milliseconds (3 seconds)
};

const toast = (text, background, color, position = 'center') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
function checkPassword() {
    let password1 = document.getElementById("passwordInput1").value;
    let password2 = document.getElementById("passwordInput2").value;
    let user = document.getElementById("checkUsername2").value;
    let number = document.getElementById("phoneNumber").value;
    let email = document.getElementById("emailInput").value;
    let result = document.getElementById("result");
    let check = document.getElementById("checkBox").checked;

    // result.innerHTML = "";  // Clear previous error messages

    // Username validation
    if (user == "") {
        toast("Required!", 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (user.length < 4) {
        toast('Username must be at least 4 characters.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    // Phone number validation
    if (number == "") {
        toast('Required!', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (number.length < 11) {
        toast('❌ Phone number is invalid.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    // Email validation
    if (email == "") {
        toast('Required!', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (!/^([\w.%+-]+)@gmail\.com$/.test(email)) {
        toast('❌ Invalid Gmail address.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    // Password validation for password1
    if (password1 == "") {
        toast('Required!', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (password1.length < 8) {
        toast('Password must be at least 8 characters long.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (!/[A-Z]/.test(password1)) {
        toast('Password must contain at least one uppercase letter.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (!/[a-z]/.test(password1)) {
        toast('Password must contain at least one lowercase letter.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (!/[0-9]/.test(password1)) {
        toast('Password must contain at least one number.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password1)) {
        toast('Password must contain at least one special character.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    // Password validation for password2
    if (password2 == "") {
        toast('Confirm your password.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    } else if (password1 !== password2) {
        toast('❌ Passwords do not match.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    if (!check) {
        toast('❌ Please agree to terms before signing up.', 'linear-gradient(to right, #f00, #0000)', '#fff')
        return;
    }

    // Redirect to the next page after successful signup
    sub.innerHTML = 'loading...'
    setTimeout(() => {
        sub.innerHTML = 'sign up'
        window.location.href = "index3.html";
    }, 3000)
    toast('☑️ Login successful!', 'linear-gradient(to right, #00b09b, #96c93d)', '#fff')
    // Example redirect to another page

}