<template>
  <div class="row m-1 p-1 text-dark">
    <div class="col-12">
      <div class="d-flex p-2 flex-row justify-content-around bg-primary rounded lead">
        <div class="w-20 text-center">
          <router-link :to="{name:'BugsPage', params: { bugId: bug.id } }" :title="'Navigate to ' + bug.name + ' Details Page'">
            <p class="m-1 text-light">
              {{ bug.title }}
            </p>
          </router-link>
        </div>

        <div class="w-20 text-center">
          <p class="m-1">
            {{ bug.creator.name }}
          </p>
        </div>
        <div class="w-20 text-center">
          <p class="m-1">
            {{ updatedAt }}
          </p>
        </div>
        <div class="w-20 text-center">
          <p class="m-1" v-if="bug.closed === false">
            👍 Open
          </p>
          <p class="m-1" v-else>
            👎 Closed
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    return {
      updatedAt: computed(() => {
      })
    }
  }
}
</script>
