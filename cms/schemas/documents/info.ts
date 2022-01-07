export default {
   name: 'info',
   title: 'Info',
   type: 'document',
   fields: [
      {
         name: 'stack',
         title: 'Stack',
         type: 'array',
         of: [
            {
               type: 'reference',
               to: [{ type: 'skill' }],
            },
         ],
         validation: (Rule) => Rule.required(),
      },
   ],
};
