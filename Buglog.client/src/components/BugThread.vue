<template>
  <div class="row">
    <div class="col-12 m-1 p-1">
      <div class="bg-light rounded p-2 d-flex flex-row justify-content-around">
        <div class="w-20 text-center">
          <h5 class="m-1 p-1">
            Title:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-1 p-1">
            Reported By:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-1 p-1">
            Last Modified:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-1 p-1">
            Status:
          </h5>
        </div>
      </div>
    </div>
    <div class="col-12" v-for="b in bugs" :key="b.id">
      <Bug :bug="b" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bugs: { type: Array, required: true }
  },
  setup() {
    return {}
  }
}
</script>
