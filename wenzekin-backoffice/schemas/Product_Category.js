import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product_category',
  title: 'Categorie produits',
  type: 'document',
  fields: [
    defineField({
      name: 'Nom',
      title: 'Nom',
      type: 'string',
    }),
  ],
})

