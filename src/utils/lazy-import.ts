import { ComponentType, lazy } from 'react'

// Utility function to create a lazy component from a named export
export const lazyImport = <T extends ComponentType<any>>(moduleImport: Promise<{ [key: string]: T }>, name: string) =>
  lazy(() =>
    moduleImport.then((module) => ({
      default: module[name]
    }))
  )
