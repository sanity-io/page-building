// imageGallery.js

import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      images: 'images',
    },
    prepare({images}) {
      return {
        title: images
          ? `${images.length === 1 ? `1 image` : `${images.length} images`} `
          : 'No images',
        subtitle: 'Gallery',
        media: images ? images[0] : ImagesIcon,
      }
    },
  },
})
