<template>
    <div>
      <main class="container my-4">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import ProductCard from '@/components/ProductCard.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      ProductCard,
      Footer,
    },
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Eco-Friendly Shirt',
            price: '$29.99',
            carbonFootprint: 'Low',
            image: 'https://via.placeholder.com/300',
          },
          {
            id: 2,
            name: 'Reusable Water Bottle',
            price: '$19.99',
            carbonFootprint: 'Very Low',
            image: 'https://via.placeholder.com/300',
          },
          {
            id: 3,
            name: 'Organic Coffee',
            price: '$12.99',
            carbonFootprint: 'Medium',
            image: 'https://via.placeholder.com/300',
          },
        ],
      };
    },
  };
  </script>