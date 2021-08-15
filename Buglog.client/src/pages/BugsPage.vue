
<template>
  <div class="bugPage">
    <div class="row">
      <div class="col">
        <BugDetails :bug="bug" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <NoteThread :notes="notes" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    const bug = computed(() => AppState.activeBug)
    onMounted(async() => {
      if (route.params.bugId) {
        try {
          await bugsService.getById(route.params.bugId)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    })
    return {
      bug
    }
  },
  components: {}
}
</script>
