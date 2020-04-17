export interface InputParams {
  packageVersionIds?: string[]
  owner?: string
  repo?: string
  packageName?: string
  numOldVersionsToDelete?: number
  numOldVersionsToKeep?: number
  token?: string
}

const defaultParams = {
  packageVersionIds: [],
  owner: '',
  repo: '',
  packageName: '',
  numOldVersionsToDelete: 0,
  numOldVersionsToKeep: 0,
  token: ''
}

export class Input {
  packageVersionIds: string[]
  owner: string
  repo: string
  packageName: string
  numOldVersionsToDelete: number
  numOldVersionsToKeep: number
  token: string

  constructor(params?: InputParams) {
    const validatedParams: Required<InputParams> = {...defaultParams, ...params}

    this.packageVersionIds = validatedParams.packageVersionIds
    this.owner = validatedParams.owner
    this.repo = validatedParams.repo
    this.packageName = validatedParams.packageName
    this.numOldVersionsToDelete = validatedParams.numOldVersionsToDelete
    this.numOldVersionsToKeep = validatedParams.numOldVersionsToKeep
    this.token = validatedParams.token
  }

  hasOldestVersionQueryInfo(): boolean {
    return !!(
      this.owner &&
      this.repo &&
      this.packageName &&
      (this.numOldVersionsToDelete > 0 || this.numOldVersionsToKeep > 0) &&
      this.token
    )
  }
}
