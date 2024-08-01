<template>
    <footer class="app-footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2024 Regal Elk Services. All rights reserved.</p>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            
          </nav>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .app-footer {
    background-color: #4CAF50;
    color: white;
    padding: 20px 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-top: auto;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
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