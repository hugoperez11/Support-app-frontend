<script setup>
import { ref, watch } from 'vue';
import { useRequestStore } from '../stores/requestStore';

const emit = defineEmits(['cancel', 'saved']);
const props = defineProps({
  id: [Number, String],
});

const requestStore = useRequestStore();

const newRequest = ref({
  requestName: '',
  subject: '',
  description: '',
  date: '',
});



const formatDate = (date) => {
  const d = new Date(date);
  return isNaN(d.getTime()) ? '' : d.toISOString().split('T')[0];
};


watch(() => props.id, async (newVal) => {
  if (newVal) {
    const request = requestStore.getRequestById(Number(newVal));
    if (request) {
      newRequest.value = { ...request, date: formatDate(request.date) };
    }
  } else {
    resetForm();
  }
}, { immediate: true });

const handleSubmit = async () => {
  try {
    if (props.id) {
      await requestStore.updateRequest(Number(props.id), newRequest.value);
    } else {
      await requestStore.addRequest(newRequest.value);
    }
    resetForm();
    emit('saved');
  } catch (error) {
    console.error("Error submitting the request:", error);
  }
};

const resetForm = () => {
  newRequest.value = {
    requestName: '',
    subject: '',
    description: '',
    date: '',
  };
};
</script>

<template>
  <div class="container">
    <div class="form-card">
      <div class="form-header">
        <h5>{{ props.id ? 'Edit Request' : 'Request Form' }}</h5>
      </div>
      <div class="form-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="requesterName">Name</label>
            <input v-model="newRequest.requestName" type="text" id="name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <label for="topic">Subject</label>
            <input v-model="newRequest.subject" type="text" id="subject" placeholder="Subject" required />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="newRequest.description" id="description" rows="3" placeholder="Description" required></textarea>
          </div>
          <div class="form-group">
            <label for="date">Date</label>
            <input v-model="newRequest.date" type="date" id="date" required />
          </div>
          <div class="form-actions">
            <button type="submit">{{ props.id ? 'Update' : 'Submit' }}</button>
            <button type="button" @click="$emit('cancel')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Container styling */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f4f8; /* Light background color */
  padding: 16px;
}

/* Form card styling */
.form-card {
  background: rgba(255, 255, 255, 0.3); /* White background with transparency */
  backdrop-filter: blur(10px); /* Apply blur effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  max-width: 500px; /* Adjust to your preference */
  padding: 16px;
}

/* Header styling */
.form-header {
  background-color: #00bcd4; /* Cyan color */
  padding: 16px;
  border-bottom: 2px solid #00bcd4;
  color: white;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.form-header h5 {
  margin: 0;
  font-size: 1.25rem;
}

/* Body styling */
.form-body {
  padding: 16px;
}

/* Form group styling */
.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #4a5568; /* Dark gray */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db; /* Light gray border */
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
}

/* Action buttons styling */
.form-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.form-actions button {
  background-color: #f59e0b; /* Amber color */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.form-actions button:hover {
  background-color: #fbbf24; /* Slightly darker amber */
}

.form-actions button:last-child {
  background-color: #4a5568; /* Dark gray */
}

.form-actions button:last-child:hover {
  background-color: #2d3748; /* Even darker gray */
}
</style>
