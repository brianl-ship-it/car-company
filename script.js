// Car search functionality

const searchInput = document.getElementById("carSearch");
const carCards = document.querySelectorAll(".car-card");

searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    carCards.forEach(card => {

        const carName = card.querySelector("h3")
            .textContent.toLowerCase();

        if (carName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});