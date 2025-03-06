import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AboutView from '../views/AboutView.vue'; // Ensure this component exists
import ProductDetails from '../views/ProductDetails.vue'; // Example route
import ProfileView from '../views/Profile.vue'; // Example route

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView, // Ensure this component exists
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  },
  { path: '/product/:id', component: ProductDetails },
  { path: '/profile', component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;