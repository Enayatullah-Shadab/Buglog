import { dbContext } from '../db/DbContext'

class NotesService {
  async getAll(query = {}) {
    return await dbContext.Notes.find(query)
  }

  getById(id) {
    throw new Error('Method not implemented.')
  }

  async create(body) {
    const note = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(note._id)
  }

  async destroy(id, user) {
    const note = await this.getById(id)
    // @ts-ignore
    if (user.id === note.creatorId.toString()) {
      await this.getById(id)
      return await dbContext.Notes.findByIdAndDelete(id)
    }
  }
}

export const notesService = new NotesService()
