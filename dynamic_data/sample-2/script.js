$(document).ready(function() {
  const products = {
    electronics: [
      { name: "Laptop", price: "$999" },
      { name: "Smartphone", price: "$699" },
      { name: "Headphones", price: "$199" },
      { name: "Tablet", price: "$299" },
      { name: "Smartwatch", price: "$149" }
    ],
    clothing: [
      { name: "T-Shirt", price: "$19" },
      { name: "Jeans", price: "$49" },
      { name: "Shoes", price: "$79" },
      { name: "Dress", price: "$69" },
      { name: "Jacket", price: "$89" }
    ],
    books: [
      { name: "Novel", price: "$9" },
      { name: "Textbook", price: "$59" },
      { name: "Biography", price: "$29" },
      { name: "Poetry", price: "$19" },
      { name: "Self-Help", price: "$39" }
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

          // Add click event to show product details
          productDiv.click(function() {
            openProductModal(product, category);
          });
        });
      } else {
        productList.text('No products found in this category.');
      }
    } else {
      productList.text('Invalid category selected.');
    }
  }

  // Function to open product modal with details
  function openProductModal(product, category) {
    const modal = $('#productModal');
    const modalContent = $('#productModal .modal-content');
    modalContent.empty();

    const productName = $('<h2>').text(product.name);
    const productPrice = $('<p>').text('Price: ' + product.price);

    modalContent.append(productName);
    modalContent.append(productPrice);

    // Add three random products from the same category
    const randomProducts = getRandomProducts(products[category], 3, product);
    $.each(randomProducts, function(index, randomProduct) {
      const randomProductName = $('<h3>').text(randomProduct.name);
      const randomProductPrice = $('<p>').text('Price: ' + randomProduct.price);
      modalContent.append(randomProductName);
      modalContent.append(randomProductPrice);
    });

    modal.css('display', 'block');
  }

  // Close modal when close button or outside the modal is clicked
  $(document).click(function(event) {
    if (event.target === $('#productModal')[0] || event.target.className === 'close') {
      $('#productModal').css('display', 'none');
    }
  });

  // Function to get random products from an array
  function getRandomProducts(array, count, excludedProduct) {
    const shuffledArray = array.filter(product => product !== excludedProduct).sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

  // Display initial products on page load
  const initialCategory = $('.category-tabs li.active').data('category');
  displayProducts(initialCategory);
});
