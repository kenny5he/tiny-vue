<template>
  <div class="demo-currency-class">
    <tiny-currency v-model="value" :fetch-currency="getCurrencyData" clearable></tiny-currency>
  </div>
</template>

<script lang="jsx">
import { TinyCurrency } from '@opentiny/vue'

export default {
  components: {
    TinyCurrency
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getCurrencyData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              symbol: '$',
              currency_code: 'MZN'
            },
            {
              symbol: null,
              currency_code: 'CNY'
            },
            {
              symbol: '*NULL*',
              currency_code: 'CHE'
            },
            {
              symbol: '$',
              currency_code: 'USD'
            },
            {
              symbol: null,
              currency_code: 'VND'
            },
            {
              symbol: null,
              currency_code: 'VUV'
            },
            {
              symbol: null,
              currency_code: 'WST'
            },
            {
              symbol: null,
              currency_code: 'XAF'
            },
            {
              symbol: null,
              currency_code: 'IRU'
            },
            {
              symbol: null,
              currency_code: 'IRE'
            },
            {
              symbol: null,
              currency_code: 'BYN'
            },
            {
              symbol: null,
              currency_code: 'HKD'
            }
          ])
        }, 500)
      })
    }
  }
}
</script>

<style scoped>
.demo-currency-class {
  width: 280px;
}
</style>
