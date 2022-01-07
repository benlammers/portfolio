export default {
   name: 'icon',
   title: 'Icon',
   type: 'object',
   fields: [
      {
         name: 'image',
         title: 'Image',
         type: 'image',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'alt',
         title: 'Alt Text',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
   ],
};
