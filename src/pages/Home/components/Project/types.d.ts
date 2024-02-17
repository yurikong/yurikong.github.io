export interface ProjectRef {
  scrollIntoView: (arg?: boolean | ScrollIntoViewOptions | undefined) => void
  scrollToProject: (
    projectName: string,
    arg?: boolean | ScrollIntoViewOptions | undefined
  ) => void
}
