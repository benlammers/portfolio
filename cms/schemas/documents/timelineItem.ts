export default {
   name: 'timelineItem',
   title: 'Timeline Item',
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
      {
         name: 'link',
         title: 'Link',
         type: 'externalLink',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'date',
         title: 'Date',
         type: 'date',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'icon',
         title: 'Icon',
         type: 'icon',
         validation: (Rule) => Rule.required(),
      },
   ],
};
