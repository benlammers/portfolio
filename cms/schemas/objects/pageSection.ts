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
      // TODO: Make it so imageAlt gone if image not set
      {
         name: 'image',
         title: 'Image',
         type: 'image',
      },
      {
         name: 'imageAlt',
         title: 'Image Alt',
         type: 'string',
      },
   ],
};
