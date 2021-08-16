<template>
  <div class="row">
    <div class="col-12 m- p-">
      <div class="bg-light rounded p-2 d-flex flex-column float-left ">
        <div class="w-20 text-center">
          <h5 class="m-2 p-2">
            Title:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-2 p-2">
            Reported:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-2 p-2">
            Modified:
          </h5>
        </div>
        <div class="w-20 text-center">
          <h5 class="m-2 p-2">
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
