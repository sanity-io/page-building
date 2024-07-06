// https://www.sanity.io/docs/environment-variables
//

export const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2024-06-17'

export const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID',
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
