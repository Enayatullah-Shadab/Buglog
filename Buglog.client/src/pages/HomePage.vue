
<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 d-flex flex-column my-3">
        <h4 class="mr-auto ml-4">
          Bugs
        </h4>
        <div>
          <button type="button" class="btn btn-info text-shadow ml-3 mt-3" data-toggle="modal" data-target="#BugModal">
            Add Bug
          </button>
        </div>
      </div>
      <div class="col-12">
        <BugThread :bugs="bugs" />
      </div>
    </div>
  </div>
  <BugModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(() => {
      bugsService.getAll()
    })
    return {
      bugs: computed(() => AppState.bugs)
    }
  }
}
</script>
