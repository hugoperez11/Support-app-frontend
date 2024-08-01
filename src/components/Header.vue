<script setup>
/* import { defineComponent } from 'vue';

// Define the component
const AppHeader = defineComponent({
  name: 'AppHeader'
});  */
</script>

<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/12-300x300.webp" alt="Logo">
      </div>
      <div class="title">
        <h1>Regal Elk Support Management</h1>
      </div>
      <nav>
        
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/requestlist">List of Applications</RouterLink>       
          <RouterLink to="/requestform">Form</RouterLink> 
          <RouterLink to="/editrequest">Edit Request</RouterLink>
      </nav>
    </div>
  </header>
</template>



<style scoped>
.app-header {
  background-color: #4CAF50;
  color: white;
  padding: 10px 0;
  width: 100%;
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000; /* ensure it stays on top */
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.logo img {
  height: 100px;
}
.title h1 {
  margin: 0;
}
nav {
  display: flex;
  gap: 20px;
}
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover {
  text-decoration: underline;
}
</style>
