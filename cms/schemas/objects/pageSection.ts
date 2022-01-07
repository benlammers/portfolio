export default {
   name: 'pageSection',
   title: 'Page Section',
   type: 'object',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'body',
         title: 'Body',
         type: 'array',
         of: [{ type: 'block' }],
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'imageAlt',
         title: 'Image Alt',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
   ],
};
