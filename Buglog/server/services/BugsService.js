import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAll(query = {}) {
    return await dbContext.Bugs.find(query).populate('creator', 'name picture')
  }

  async getById(id) {
    return await dbContext.Bugs.findById(id).populate('creator')
  }

  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }

  async update(body, user) {
    const bug = await this.getById(body.id)
    if (user.id === bug.creatorId) {
      const bug = await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: true, runValidators: false })
      if (!bug) {
        throw new BadRequest('Invalid bug')
      }
      return bug
    }
  }

  async destroy(id) {
    return await dbContext.Bugs.findByIdAndDelete(id)
  }
}

export const bugsService = new BugsService()
