<template>
  <div class="modal fade"
       id="BugModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Add New Bug
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="create">
            <div class="form-group">
              <input type="text"
                     name="title"
                     v-model="state.newBug.title"
                     class="form-control"
                     placeholder="Title..."
                     aria-describedby="titleHelpId"
              >
              <small id="titleHelpId" class="text-muted">Input Bug Title</small>
            </div>
            <div class="form-group">
              <input type="text"
                     name="description"
                     v-model="state.newBug.description"
                     class="form-control"
                     placeholder="Description..."
                     aria-describedby="descriptionHelpId"
              >
              <small id="descriptionHelpId" class="text-muted">Input Bug Description</small>
            </div>
            <button type="submit" class="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import $ from 'jquery'
import { router } from '../router'
export default {
  setup() {
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      async create() {
        try {
          const newId = await bugsService.create(state.newBug)
          state.newBug = {}
          $('#BugModal').modal('hide')
          router.push({ name: 'BugsPage', params: { bugId: newId } })
          Pop.toast('Good job you created Successfuly :)')
        } catch (error) {
          Pop.toast(error, 'Wow :( something went wrong, please retest it')
        }
      }
    }
  }
}
</script>
