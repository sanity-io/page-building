// ./schemas/videoType.js

import {DocumentVideoIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const videoType = defineType({
  name: 'video',
  type: 'object',
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  icon: DocumentVideoIcon,
  preview: {
    select: {
      title: 'videoLabel',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Video',
        media: DocumentVideoIcon,
      }
    },
  },
})
