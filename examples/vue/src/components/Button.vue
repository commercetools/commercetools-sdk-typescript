<template>
  <button type="button" :style="{background: color}" class="btn" @click="onClick()">{{text}}</button>
</template>

<script>

export default ({
  name: 'Button',
  props: {
    text: String,
    color: String,
    onClick: Function,
  }
})

</script>
