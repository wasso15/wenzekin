import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Products',
  title: 'Produits',
  type: 'document',
  fields: [
    defineField({
      name: 'Nom',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required()
    }),

   
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required()
      }),

      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
          hotspot: true // <-- Defaults to false
        }
      }),

      
      defineField({
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'Nom',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }),
      

      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'product_category'}}],
        validation: Rule => Rule.required()
      }),

      defineField({
        name: 'prix',
        title: 'Prix',
        type: 'number',
        initialValue:1, 
        validation: Rule => Rule.required()
      }),
      
      defineField({
        name: 'Stock',
        title: 'Stock',
        type: 'number',
        initialValue:1, 
        validation: Rule => Rule.required()
      }),

     
  ],
})

