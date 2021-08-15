
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import BaseController from '../utils/BaseController'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/notes', this.getNotesByBugsId)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.close)
  }

  async getAll(req, res, next) {
    try {
      const bug = await bugsService.getAll({ creatorId: req.userInof.id })
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const bug = await bugsService.getById(req.params.id)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBugsId(req, res, next) {
    try {
      const notes = await bugsService.getNotesByBugsId({ bugId: req.params.id })
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const bug = await bugsService.create(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      delete req.body.closed
      req.body.id = req.params.id
      const bug = await bugsService.update(req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }

  async close(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      // @ts-ignore
      const bug = await bugsService.close(req.params.id, req.body)
      res.send(bug)
    } catch (error) {
      next(error)
    }
  }
}
