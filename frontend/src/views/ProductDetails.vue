<template>
    <div class="product-details">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" :alt="product.name" />
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="addToCart">Add to Cart</button>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    data() {
        return {
            product: {
                name: 'Eco-Friendly Product',
                image: 'path/to/image.jpg',
                description: 'This is an eco-friendly product.',
                price: '$20.00'
            }
        };
    },
    methods: {
        addToCart() {
            // Logic to add the product to the cart
            console.log(`${this.product.name} added to cart`);
        }
    }
};
</script>

<style scoped>
.product-details {
    text-align: center;
}

.product-details img {
    max-width: 100%;
    height: auto;
}
</style>