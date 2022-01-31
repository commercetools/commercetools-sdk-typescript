<template>
  <div>
    <h1>{{ title }}</h1>
    <Button :text="text" color="#2bcbfc" :onClick="handler" />
    <pre :style="{}">
      {{ isShown ? projectDetails : null }}
    </pre>
  </div>
</template>

<script>
import Button from './Button'
import { getApiRoot, projectKey } from '../sdk/ApiRoot'

export default {
  name: 'Demo SDK usage in vue',
  props: {
    title: String,
    msg: String,
    onClick: Function,
  },
  data() {
    return {
      text: 'Get Project Details',
      isShown: false,
      projectDetails: null,
    }
  },
  methods: {
    async handler() {
      if (this.isShown) {
        this.isShown = this.toggle(this.isShown)
        return
      }

      try {
        this.projectDetails = await getApiRoot()
          .withProjectKey({ projectKey })
          .get()
          .execute()

        this.toggle(this.isShown)
      } catch (e) {
        console.eroor(e)
      }
    },
    toggle(val) {
      this.isShown = !val
      this.text = this.isShown ? 'Hide Project Details' : 'Get Project Details'
    },
  },
  components: {
    Button,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  color: #ffffff;
  border: 0px solid #2bcbfc;
  border-radius: 5px;
  cursor: pointer;
}
</style>
