<template>
  <div class="row mt-2">
    <div class="col">
      <div class="bg-info rounded p-2">
        {{ bug }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>
