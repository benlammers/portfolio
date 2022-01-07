export default {
   name: 'about',
   title: 'About',
   type: 'document',
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
   ],
};
