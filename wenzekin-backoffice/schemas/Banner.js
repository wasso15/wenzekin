import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Banner',
  title: 'Promotion',
  type: 'document',
  fields: [
    defineField({
      name: 'Nom',
      title: 'Nom promotion',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
    name: 'image',
    title: 'Image promotion',
    type: 'image',
    validation: Rule => Rule.required(),
    options: {
    hotspot: true // <-- Defaults to false
    }
    }),

     
  ],
})

