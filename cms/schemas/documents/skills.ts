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
         title: 'Icon',
         name: 'icon',
         type: 'icon',
         validation: (Rule) => Rule.required(),
      },
   ],
};
