$(document).ready(function() {
    const products = {
      electronics: [
        { name: "Laptop", price: "$999" },
        { name: "Smartphone", price: "$699" },
        { name: "Headphones", price: "$199" }
      ],
      clothing: [
        { name: "T-Shirt", price: "$19" },
        { name: "Jeans", price: "$49" },
        { name: "Shoes", price: "$79" }
      ],
      books: [
        { name: "Novel", price: "$9" },
        { name: "Textbook", price: "$59" },
        { name: "Biography", price: "$29" }
      ]
    };
  
    // Event listener for category tab click
    $('.category-tabs li').click(function() {
      // Remove active class from all tabs
      $('.category-tabs li').removeClass('active');
      
      // Add active class to the clicked tab
      $(this).addClass('active');
      
      // Get the selected category from the data attribute
      const selectedCategory = $(this).data('category');
      
      // Call the function to display products
      displayProducts(selectedCategory);
    });
  
    // Function to display products based on the selected category
    function displayProducts(category) {
      const productList = $('#productList');
      productList.empty();
  
      if (products.hasOwnProperty(category)) {
        const selectedProducts = products[category];
  
        if (selectedProducts.length > 0) {
          $.each(selectedProducts, function(index, product) {
            const productDiv = $('<div>').addClass('product');
            const productName = $('<h3>').text(product.name);
            const productPrice = $('<p>').text('Price: ' + product.price);
  
            productDiv.append(productName);
            productDiv.append(productPrice);
            productList.append(productDiv);
          });
        } else {
          productList.text('No products found in this category.');
        }
      } else {
        productList.text('Invalid category selected.');
      }
    }
  
    // Display initial products on page load
    const initialCategory = $('.category-tabs li.active').data('category');
    displayProducts(initialCategory);
  });
  