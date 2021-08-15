import { dbContext } from '../db/DbContext'

class BugsService {
  async getAll(query = {}) {
    return await dbContext.Bugs.find(query).populate('creator')
  }

  async getById(id) {
    return await dbContext.Bugs.findById(id).populate('creator')
  }

  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async update(body) {
    return await dbContext.Bugs.findByIdAndUpdate(body.id).populate('creator')
  }

  async destroy(id) {
    return await dbContext.Bugs.findByIdAndDelete(id)
  }
}

export const bugsService = new BugsService()
