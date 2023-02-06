declare module '*.png' {
  const content: StaticImport
  export default content
}

declare module '*.svg' {
  const content: string | StaticImport
  export default content
}
