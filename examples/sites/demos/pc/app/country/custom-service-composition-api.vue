<template>
  <div class="demo-country-class">
    <tiny-country v-model="value" clearable placeholder="请选择" :fetch-country="getCountryData"></tiny-country>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyCountry } from '@opentiny/vue'

const value = ref('')

function getCountryData() {
  return new Promise((resolve) => {
    resolve([
      {
        territory_short_name: 'China',
        description: 'the Peoples Republic of China',
        language: 'US',
        territory_code: 'CN'
      },
      {
        territory_short_name: 'France',
        description: 'the French Republic',
        language: 'US',
        territory_code: 'FR'
      },
      {
        territory_short_name: 'Finland',
        description: 'the Republic of Finland',
        language: 'US',
        territory_code: 'FI'
      },
      {
        territory_short_name: 'Kuwait',
        description: 'the State of Kuwait',
        language: 'US',
        territory_code: 'KW'
      }
    ])
  })
}
</script>

<style scoped>
.demo-country-class {
  width: 280px;
}
</style>
