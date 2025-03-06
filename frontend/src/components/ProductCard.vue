<template>
    <div class="card">
      <img :src="product.image" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text text-muted">{{ product.price }}</p>
        <p class="card-text">
          <small class="text-success">Carbon Footprint: {{ product.carbonFootprint }}</small>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>