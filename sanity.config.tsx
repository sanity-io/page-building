import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Page Builder',

  projectId: '2ak90yby',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
  form: {
    components: {
      field: (props) => {
        if (props.path.length === 1) {
          return (
            <div
              style={{
                // border: '1px solid red',
                padding: 30,
              }}
            >
              {props.renderDefault(props)}
            </div>
          )
        }

        return props.renderDefault(props)
      },
    },
  },
})
