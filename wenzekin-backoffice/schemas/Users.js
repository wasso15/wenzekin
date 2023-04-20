import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Utilisateur',
  type: 'document',
  fields: 
  
  [ defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'phone_number',
      title: 'Numero de Telephone',
      type: 'number',
      validation: Rule => Rule.required()
    }),

    defineField({
      name: 'adresse',
      title: 'Adresse',
      type: 'string',
    }),

      defineField({
        name: 'profil_img',
        title: 'Photo Profil',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        }
      }),     
  ],
})

