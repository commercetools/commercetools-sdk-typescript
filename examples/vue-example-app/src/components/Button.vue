<template>
  <button type="button" :style="{ background: color, fontWeight: 'bold' }" class="btn" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
  },
  emits: ['click']
}
</script>