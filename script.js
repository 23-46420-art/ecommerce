// Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-icon .badge');
    
    // Open cart sidebar
    cartIcon.addEventListener('click', function() {
        cartSidebar.classList.add('active');
    });
    
    // Close cart sidebar
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
    });
    
    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update cart badge
            let currentCount = parseInt(cartBadge.textContent);
            cartBadge.textContent = currentCount + 1;
            
            // Show confirmation
            alert('Product added to cart!');
            
            // Open cart sidebar
            cartSidebar.classList.add('active');
        });
    });
    
    // Quantity buttons in cart
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            const quantitySpan = parent.querySelector('span');
            let quantity = parseInt(quantitySpan.textContent);
            
            if (this.textContent === '+') {
                quantity++;
            } else if (this.textContent === '-' && quantity > 1) {
                quantity--;
            }
            
            quantitySpan.textContent = quantity;
            
            // Update total (simplified)
            updateCartTotal();
        });
    });
    
    // Update cart total (simplified)
    function updateCartTotal() {
        // In a real implementation, you would calculate based on all items
        const totalElement = document.querySelector('.cart-total span:last-child');
        // This is a simplified version - in reality you would calculate based on all items
        totalElement.textContent = '$379.98';
    }
});