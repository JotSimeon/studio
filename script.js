    window.onload = function () {
        setTimeout(function () {
            document.querySelector('.spinner').style.display = 'none'; // Hide spinner
            document.getElementById('main-content').style.display = 'block'; // Show form
        }, 3000); // Delay in milliseconds (3 seconds)
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
        // Get input values
        let password = document.getElementById("enterPassword").value;
        let user = document.getElementById("checkUsername").value;
        let result = document.getElementById("result");

        // Clear previous error messages
        // result.innerHTML = "";

        // Username validation
        if (user == "") {
            toast("Username can't be empty", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (user.length < 4) {
            toast("Username is invalid (must be at least 4 characters)", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        }

        // Password validation
        if (password == "") {
            toast("Password can't be empty.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (password.length < 8) {
            toast("Password must be at least 8 characters long.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast("must contain at least one uppercase letter.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast("must contain at least one lowercase letter.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (!/[0-9]/.test(password)) {
            toast("must contain at least one number.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast("must contain at least one special character.", 'linear-gradient(to right, #f00, #0000)', '#fff')
            return;
        }

        // LocalStorage Handling

        const savedUser = localStorage.getItem("savedUser");
        const savedPassword = localStorage.getItem("savedPassword");

        if (!savedUser && !savedPassword) {
            // No user exists yet — save new user (first time only)
            localStorage.setItem("savedUser", user);
            localStorage.setItem("savedPassword", password);
            sub.innerHTML = 'loading...'
            setTimeout(() => {
                sub.innerHTML = 'Login'
                window.location.href = "index3.html";
            }, 3000)
            toast("✅ First-time login: credentials saved!", 'linear-gradient(to right, #00b09b, #96c93d)', '#fff');
        } else {
            // Compare entered credentials with saved credentials
            if (user === savedUser && password === savedPassword) {
                sub.innerHTML = 'loading...'
                setTimeout(() => {
                    sub.innerHTML = 'Login'
                    window.location.href = "index3.html";
                }, 3000)
                toast('☑️ Login successful!', 'linear-gradient(to right, #00b09b, #96c93d)', '#fff')
            } else {
                toast("❌ Incorrect username or password. Access denied.", 'linear-gradient(to right, #f00, #0000)', '#fff');
                    errorMsg.style.display = 'none'
            }
        }
    }
    function showPassword() {
        const passwordInput = document.getElementById('enterPassword');
        if (passwordInput.type == "password") {
            passwordInput.type = "text";  // Not "type"
        } else {
            passwordInput.type = "password";
        }
    }