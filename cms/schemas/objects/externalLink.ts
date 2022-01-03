export default {
   name: 'externalLink',
   title: 'External Link',
   type: 'object',
   fields: [
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'url',
         title: 'URL',
         type: 'url',
         validation: (Rule) => Rule.required(),
      },
   ],
};
