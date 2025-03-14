<template>
  <div style="overflow-y: scroll;margin-bottom: 5%;">
    <h1 style="display: flex;justify-content: center;">{{ title }}</h1>
    <pre>
      {{ isShown ? projectDetails : null }}
    </pre>
    <div style="display: flex;justify-content: space-around;">
      <Button :text="text" color="#2bcbfc" @click="handler" style="margin-right: 10px;" />
      <Button :text="textCustomers" color="#2bcbfc" @click="customerHander" style="margin-left: 10px;" />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import { getApiRoot, projectKey } from '../sdk/index'

export default {
  name: 'DemoSDKUsageInVue',
  props: {
    title: String,
    msg: String,
    onClick: Function,
    textCustomers: 'Get Customers List'
  },
  data() {
    return {
      isShown: false,
      projectDetails: null,
      text: 'Get Project Details',
      textCustomers: 'Get Customers List'
    }
  },
  methods: {
    async handler() {
      if (this.isShown) {
        this.reset()
        return
      }
      try {
        this.projectDetails = await getApiRoot()
          .withProjectKey({ projectKey })
          .get()
          .execute()

        this.text = 'Clear Screen'
        this.isShown = this.toggle(this.isShown)
      } catch (e) {
        console.error(e)
      }
    },
    async customerHander() {
      if (this.isShown) {
        this.reset()
        return
      }
      this.projectDetails = await getApiRoot()
        .withProjectKey({ projectKey })
        .customers()
        .get({ queryArgs: { limit: 2 } })
        .execute()

      this.textCustomers = 'Clear Screen'
      this.isShown = this.toggle(this.isShown)
    },
    toggle(val) {
      return !val
    },
    reset() {
      this.isShown = this.toggle(this.isShown)
      this.projectDetails = null
      this.text = 'Get Project Details'
      this.textCustomers = 'Get Customers List'
    }
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.btn {
  padding: 10px;
  width: 150px;
  color: #000;
  border: 0px solid #2bcbfc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
