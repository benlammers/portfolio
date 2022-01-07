export default {
   name: 'project',
   title: 'Projects',
   type: 'document',
   preview: {
      select: {
         title: 'name',
         media: 'image',
      },
   },
   fields: [
      {
         name: 'name',
         title: 'Project Name',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'roles',
         title: 'Roles',
         type: 'array',
         of: [{ type: 'string' }],
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'description',
         title: 'Description',
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
      {
         name: 'repository',
         title: 'Repository',
         type: 'url',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'projectLink',
         title: 'External Link',
         type: 'externalLink',
      },
      {
         name: 'isHighlighted',
         title: 'Is Highlighted',
         type: 'boolean',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'name',
            maxLength: 96,
         },
         hidden: ({ document }) => !document.isHighlighted,
         validation: (Rule) =>
            Rule.custom((field, context) => {
               if (context.document.isHighlighted && !field) {
                  return 'You must create a slug if the project is highlighted';
               }
               return true;
            }),
      },
      {
         name: 'metaDescription',
         title: 'Meta Description',
         type: 'string',
         hidden: ({ document }) => !document.isHighlighted,
         validation: (Rule) =>
            Rule.custom((field, context) => {
               if (context.document.isHighlighted && !field) {
                  return 'You must create a meta description if the project is highlighted';
               }
               return true;
            }),
      },
      {
         name: 'updated',
         title: 'Updated',
         type: 'date',
         hidden: ({ document }) => !document.isHighlighted,
         validation: (Rule) =>
            Rule.custom((field, context) => {
               if (context.document.isHighlighted && !field) {
                  return 'You must create a last updated date if the project is highlighted';
               }
               return true;
            }),
      },
      {
         name: 'page',
         title: 'Page',
         type: 'array',
         hidden: ({ document }) => !document.isHighlighted,
         validation: (Rule) =>
            Rule.custom((field, context) => {
               if (context.document.isHighlighted && !field) {
                  return 'You must create a page if the project is highlighted';
               }
               return true;
            }),
         of: [{ type: 'pageSection' }],
      },
   ],
};
