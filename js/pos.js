
    document.addEventListener("DOMContentLoaded", function() {
        // Store the initial content of the .item_card div
        const initialItemCardContent = document.querySelector('.item_card').innerHTML;

        // Function to reset .item_card to its initial state
        function resetItemCard() {
            document.querySelector('.item_card').innerHTML = initialItemCardContent;
        }

        // Function to load HTML content into .item_card
        function loadContent(url) {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('.item_card').innerHTML = html;
                })
                .catch(error => console.error('Error fetching content:', error));
        }

        // Event listener for the "Categories" button
        document.querySelector(".dropbtn").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            resetItemCard(); // Reset .item_card to its initial state
        });

        // Event listeners for each link
        document.getElementById("electronics-link").addEventListener("click", function(event) {
            event.preventDefault();
            loadContent("html/pos-electronics.html");
        });

        document.getElementById("clothing-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-clothing.html");
        });

        document.getElementById("food-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-food.html");
        });

        document.getElementById("home-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-home.html");
        });

        document.getElementById("health-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-health.html");
        });

        document.getElementById("office-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-office.html");
        });

        document.getElementById("sports-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-sports.html");
        });

        document.getElementById("toys-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-toys.html");
        });

        document.getElementById("automotive-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-automotive.html");
        });

        document.getElementById("miscellaneous-link").addEventListener("click", function(event) {
            event.preventDefault(); 
            loadContent("html/pos-miscellaneous.html");
        });

    });
