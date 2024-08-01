<script>
import { computed, onMounted } from 'vue';
import {useRequestStore} from '../stores/requestStore.js';

export default {
  name: 'RequestsList',
  setup() {
    const requestStore = useRequestStore();
    const requests = computed(() => requestStore.requests);
    onMounted(() => {
      requestStore.fetchAllRequests();  
    });

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return { requests, formatDate };
  },
};
</script>
<template>
  <div class="container">
    <div class="grid">
      <div
        v-for="request in requests"
        :key="request.id"
        class="card"
      >
        <div class="card-header">
          <h4>{{ request.requestName }}</h4>
        </div>
        <div class="card-body">
          <p><strong>Fecha de la solicitud:</strong> {{ formatDate(request.requestDate) }}</p>
          <p><strong>Tema de la consulta:</strong> {{ request.subject }}</p>
          <p><strong>Descripción de la consulta:</strong> {{ request.description }}</p>
          <p><strong>Nombre del solicitante:</strong> {{ request.requestName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Container styling */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8; /* Light background color */
  padding: 20px;
}

/* Grid styling */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 1200px; /* Adjust to limit the maximum width */
}

/* Card styling */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: backdrop-filter 0.3s ease;
  backdrop-filter: blur(5px);
}

.card:hover {
  backdrop-filter: blur(10px);
}

/* Header styling */
.card-header {
  background-color: #00bcd4; /* Cyan color */
  padding: 16px;
  border-bottom: 2px solid #00bcd4;
  color: white;
  text-align: center;
}

/* Body styling */
.card-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.card-body p {
  margin: 0 0 8px;
}

.card-body p:last-child {
  margin-top: auto; /* Pushes last paragraph to the bottom */
}
</style>

