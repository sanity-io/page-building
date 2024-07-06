// ./schemas/promotionType.ts

import {StarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const promotionType = defineType({
  name: 'promotion',
  type: 'document',
  title: 'Promotion',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  icon: StarIcon,
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Promotion',
        media: StarIcon,
      }
    },
  },
})
