<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>


<template>
  <Navbar />
  <RouterView />
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true"/>
</template>