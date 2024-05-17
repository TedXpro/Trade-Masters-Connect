const customerForm = document.getElementById('customer-details-form');

customerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('customer-name').value;
    const email = document.getElementById('customer-email').value;
    const phone = document.getElementById('customer-phone').value;
    const location = document.getElementById('customer-location').value;
    const bio = document.getElementById('customer-bio').value;

    // Logic to update user profile (e.g., send data to server)
    console.log("Customer profile updated:", { name, email, phone, location, bio });

    // Update profile display (optional)
    // ...
});


/* 
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

nav {
    background-color: #edf6f9;
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1;
}

nav ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    align-items: center;
    margin-right: 100px;
}

.login {
    display: flex;
    gap: 10px
}

.login button {
    background-color: #14213d;
    padding: 5px;
    width: 100px;
    text-align: center;
    color: white;
    font-weight: bold;
    transition: 0.5 ease;

}

.login button:hover {
    cursor: pointer;
    background-color: #eff3f9;
    color: #14213d;
    border: 1px solid #f8b418;

}

.logoImage img {
    padding: 0;

    width: 400px;
    scale: (5);
}

#custInfo{
    position: absolute;
    top: 400px;
    left: 400px;

}

#custInfo label{
    display: block;
}



#customer-profile {
    display: flex;
    flex-wrap: wrap;
    /* Allow content to wrap if needed */
position: absolute;
top: 100px;
left: 400px;
justify - content: space - between;
padding: 20px;
}

.profile - pic - container {
    position: relative;
    /* Enable overlay positioning */
    width: 180px;
    height: 180px;
    border - radius: 50 %;
    overflow: hidden;
    /* Hide overflowing image parts */
    box - shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    /* Subtle shadow */
}

.profile - pic - container img {
    width: 100 %;
    /* Ensure image fills container */
    height: 100 %;
    /* Ensure image fills container */
    object - fit: cover;
    /* Crop image to fit container */
}

.overlay {
    position: absolute;
    /* Position overlay over image */
    top: 0;
    left: 0;
    width: 100 %;
    height: 100 %;
    background - color: rgba(0, 0, 0, 0.3);
    /* Semi-transparent black */
    opacity: 0;
    /* Hide overlay initially */
    transition: opacity 0.3s ease;
    /* Smooth fade-in on hover */
    display: flex;
    justify - content: center;
    align - items: center;
}

.profile - pic - container: hover.overlay {
    opacity: 1;
    /* Show overlay on hover */
}

.overlay button {
    background - color: transparent;
    color: white;
    border: none;
    padding: 10px 20px;
    font - size: 16px;
    cursor: pointer;
    transition: color 0.3s ease;
}

.overlay button:hover {
    color: #f8b418;
    /* Change button text color on hover */
} */