class ProjectService {
  constructor({ apiRoot }) {
    this.apiRoot = apiRoot
  }

  async getProject() {
    return this.apiRoot.get().execute()
  }
}

module.exports = ProjectService
