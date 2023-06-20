// ./schemas/formType.js

import {EnvelopeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const formType = defineType({
  name: 'form',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
  icon: EnvelopeIcon,
  preview: {
    select: {
      heading: 'heading',
      form: 'form',
    },
    prepare({heading, form}) {
      return {
        title: heading || 'Untitled',
        subtitle: form ? `${form.charAt(0).toUpperCase() + form.slice(1)} form` : 'Form',
        media: EnvelopeIcon,
      }
    },
  },
})
