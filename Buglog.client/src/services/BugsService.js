
import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAll() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getById(id) {
    const res = await api.get('api/bugs/' + id)
    AppState.activeBug = res.data
  }

  async create(newBug) {
    const res = await api.post('api/bugs', newBug)
    AppState.activeBug = res.data
    this.getAll()
    return res.data.id
  }

  async update(newBug, id) {
    await api.put('api/bugs/' + id, newBug)
    this.getAll()
  }

  async close(id) {
    await api.delete('api/bugs/' + id)
    this.getAll()
  }
}

export const bugsService = new BugsService()
