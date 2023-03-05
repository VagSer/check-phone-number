<script setup>
import { ref } from 'vue'
import axios from 'axios'

const isLoading = ref(false)
const number = ref('')
const info = ref(null)
const severity = ref('')

const checkNumber = async () => {
  if (number.value !== '') {
    isLoading.value=true
    info.value=null
    const response = await axios.get(`https://api.apilayer.com/number_verification/validate?number=${number.value}`, 
      {
        headers: {
          apikey: 'wB8pwTKfwL5UQ2gdbsHtxGNtF4GgfCHC'
        }
      })
    info.value = {...response.data}
    severity.value=info.value.success !== false? 'info' : 'error'
    isLoading.value=false
  }
}
</script>

<template>
  <div class="App">
    <Card>
      <template #title>
        Check Phone Number
      </template>
      <template #content>
        <InputText 
        v-model="number"
        type="phone"
        />
      </template>
      <template #footer>
        <Button 
        icon="pi pi-search" 
        label="Check"
        v-model:loading="isLoading"
        @click="checkNumber"
        />
      </template>
    </Card>
    <Message
      v-if="info !== null"
      :severity="severity"
      :closable="false"
    >
      <section v-if="info.hasOwnProperty('error') === false">
        <h2>{{ info.international_format }}</h2>
        <h2>{{ info.country_name }}, {{ info.country_code }}</h2>
        <p>
          {{ info.carrier }} {{ info.location }}
        </p>
      </section>
      <section v-else>
        <h2>Error</h2>
        <p>{{ info.error?.info }}</p>
      </section>
    </Message>
  </div>
</template>

<style scoped>
.App {
  width: min(90%, 500px);
  margin: auto;
}
.p-inputtext {
  width: 95%;
}
</style>
