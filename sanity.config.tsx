import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Page Builder',

  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,

  plugins: [structureTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
