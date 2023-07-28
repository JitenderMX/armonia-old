$(document).ready(function() {
    const city = {
      delhi: [
        { name: "Laptop", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-1" },
        { name: "Smartphone", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-2" },
        { name: "Headphones", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-3" }
      ],
      mumbai: [
        { name: "T-Shirt", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-4" },
        { name: "Jeans", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-5" },
        { name: "Shoes", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-6" }
      ],
      pune: [
        { name: "Novel", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-7" },
        { name: "Textbook", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-8" },
        { name: "Biography", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-9" }
      ],
      amritsar: [
        { name: "Novel", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-10" },
        { name: "Textbook", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-11" },
        { name: "Biography", link: "https://goo.gl/maps/zcjv7YQkL2ni2QDF8", image:"store-1" }
      ]
    };
  
    // Event listener for category tab click
    $('.loc-tab .loc-tab-btn').click(function() {
      // Remove active class from all tabs
      $('.loc-tab .loc-tab-btn').removeClass('active');
      
      // Add active class to the clicked tab
      $(this).addClass('active');
      
      // Get the selected category from the data attribute
      const selectedCity = $(this).data('city');
      
      // Call the function to display City
      displayList(selectedCity);
    });
  
    // Function to display City based on the selected category
    function displayList(category) {
      const cityList = $('#cityList');
      cityList.empty();
  
      if (city.hasOwnProperty(category)) {
        const selectedCity = city[category];
  
        if (selectedCity.length > 0) {
          $.each(selectedCity, function(index, city) {
            const cityDiv = '<div class="loc-box"><img src="image/store/'+city.image+'.png" class="img-fluid" alt=""><a href="'+city.link+'" target="_blank">'+city.name+'</a></div>';
            cityList.append(cityDiv);
          });
        } else {
            cityList.text('No City found in this category.');
        }
      } else {
        cityList.text('Invalid category selected.');
      }
    }
  
    // Display initial City on page load
    const initialCity = $('.loc-tab .loc-tab-btn.active').data('city');
    displayList(initialCity);


    // Search fuction
    //     document.getElementById("searchInput").addEventListener("keypress", function(event) {
    //   if (event.key === "Enter" || event.keyCode === 13) {
    //     searchBooks();
    //   }
    // });
      
   
      
      document.getElementById("btnSearch").addEventListener("click", () => {
        const searchQuery = document.getElementById("searchInput").value.toLowerCase();
        const searchResults = [];
      
        // Loop through each city in the 'city' object
        Object.keys(city).forEach((cityName) => {
          // Access the array of items for each city
          const items = city[cityName];
      
          // Loop through each item in the array
          items.forEach((item) => {
            // Convert the item name to lowercase for case-insensitive search
            const itemName = item.name.toLowerCase();
      
            // Check if the search query is present in the item name
            if (itemName.includes(searchQuery)) {
              // Add the matching item to the searchResults array
              searchResults.push({ cityName, ...item });
            }
          });
        });
      
        // Call a function to display the search results on the website
        displaySearchResults(searchResults);
      });
      
      function displaySearchResults(results) {
        const searchResultsDiv = document.getElementById("cityList");
        searchResultsDiv.innerHTML = "";
      
        if (results.length === 0) {
          searchResultsDiv.innerHTML = "<p>No results found.</p>";
        } else {
          results.forEach((result) => {
            const locBoxDiv = document.createElement("div");
  locBoxDiv.classList.add("loc-box");
  locBoxDiv.innerHTML = `<img src="image/store/${result.image}.png" class="img-fluid" alt="">
  <a href="${result.link}" target="_blank">${result.name}`;
            searchResultsDiv.appendChild(locBoxDiv);
          });
        }
      }
      
      
  });
  