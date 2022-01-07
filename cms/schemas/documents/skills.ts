export default {
   name: 'skill',
   title: 'Skills',
   type: 'document',
   fields: [
      {
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) => Rule.required(),
      },
      {
         title: 'Level',
         name: 'level',
         type: 'string',
         options: {
            list: [
               { title: 'Exploring', value: 'exploring' },
               { title: 'Familiar', value: 'familiar' },
               { title: 'Proficient', value: 'proficient' },
               { title: 'Hidden', value: 'hidden' },
            ],
         },
         validation: (Rule) => Rule.required(),
      },
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
