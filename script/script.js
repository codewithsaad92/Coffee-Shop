document.addEventListener("DOMContentLoaded", function () {

    // Show popup
    document.getElementById("popup").classList.add("active");

    // Close popup
    document.getElementById("closePopup").onclick = function () {
        document.getElementById("popup").classList.remove("active");
    };

    // Form submit
    document.getElementById("orderForm").addEventListener("submit", function (e) {

        e.preventDefault();

        Swal.fire({
            title: "Congratulations!",
            text: "Your order has been placed successfully ☕",
            icon: "success",
            confirmButtonText: "Awesome",
            confirmButtonColor: "#6f4e37"
        });

        // Close Bootstrap modal
        let modalEl = document.getElementById('orderModal');
        let modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();

        // Reset form
        this.reset();

    });

});