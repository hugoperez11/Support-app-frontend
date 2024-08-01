<script setup>
import { computed, onMounted } from 'vue';
import { useRequestStore } from '../stores/requestStore';

const emit = defineEmits(['edit']);

const requestStore = useRequestStore();
    const requests = computed(() => requestStore.requests);
    onMounted(() => {
      requestStore.fetchAllRequests();  
    });


const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

const handleEdit = (id) => {
  console.log("Editing request with ID:", id); 
  emit('edit', id);
};

const handleDelete = async (id) => {
  try {
    await requestStore.deleteRequest(id);
    console.log("Request deleted successfully with ID:", id); 
  } catch (error) {
    console.error("Error deleting the request with ID:", id, error); 
  }
};
</script>

<template>
  <div class="page-container">
    <div class="grid-container">
      <div 
        v-for="request in requests" 
        :key="request.id" 
        class="card"
      >
        <div class="card-header">
          <h4>{{ request.requestName }}</h4>
        </div>
        <div class="card-body">
          <p><strong>Subject:</strong> {{ request.subject }}</p>
          <p><strong>Description:</strong> {{ request.description }}</p>
          <p><strong>Date:</strong> {{ formatDate(request.requestDate) }}</p>
          <div class="card-actions">
            <button @click="handleEdit(request.id)" class="edit-button">Edit</button>
            <button @click="handleDelete(request.id)" class="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Full-height page container with centered content */
.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8; /* Light background color */
  padding: 1rem;
}

/* Grid container styling */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px; /* Limit the maximum width for larger screens */
  width: 100%;
}

/* Card styling */
.card {
  background: rgba(255, 255, 255, 0.3); /* Semi-transparent white background */
  backdrop-filter: blur(10px); /* Blur effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

/* Header of the card */
.card-header {
  background-color: #00bcd4; /* Cyan color */
  padding: 1rem;
  color: white;
  text-align: center;
}

/* Card body styling */
.card-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Card actions styling */
.card-actions {
  display: flex;
  gap: 0.5rem;
  margin-top: auto; /* Push buttons to the bottom */
}

/* Button styling */
.edit-button {
  background-color: #00bcd4; /* Cyan color */
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #0097a7; /* Darker cyan */
}

.delete-button {
  background-color: #ff5722; /* Amber color */
  color: white;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #e64a19; /* Darker amber */
}
</style>
