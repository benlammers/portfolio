// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
   // We name our schema
   name: 'default',
   // Then proceed to concatenate our document type
   // to the ones provided by any plugins that are installed
   types: schemaTypes.concat([
      {
         title: 'Icon',
         name: 'icon',
         type: 'document',
         fields: [
            {
               title: 'Title',
               name: 'title',
               type: 'string',
            },
            {
               title: 'Image',
               name: 'image',
               type: 'image',
            },
         ],
      },
      {
         title: 'Skill',
         name: 'skill',
         type: 'document',
         fields: [
            {
               title: 'Name',
               name: 'name',
               type: 'string',
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
                  ],
               },
            },
            {
               title: 'Icon',
               name: 'icon',
               type: 'image',
            },
         ],
      },
      {
         title: 'Project Link',
         name: 'projectLink',
         type: 'object',
         fields: [
            {
               title: 'Label',
               name: 'label',
               type: 'string',
            },
            {
               title: 'Aria Label',
               name: 'ariaLabel',
               type: 'string',
            },
            {
               title: 'URL',
               name: 'url',
               type: 'url',
            },
            {
               title: 'Icon',
               name: 'icon',
               type: 'reference',
               to: [{ type: 'icon' }],
            },
         ],
      },
      {
         title: 'Project',
         name: 'project',
         type: 'document',
         fields: [
            {
               title: 'Title',
               name: 'title',
               type: 'string',
            },
            {
               title: 'Description',
               name: 'description',
               type: 'text',
            },
            {
               title: 'Role',
               name: 'role',
               type: 'string',
            },
            {
               title: 'Date',
               name: 'date',
               type: 'date',
            },
            {
               title: 'In Progress',
               name: 'inProgress',
               type: 'boolean',
            },
            {
               title: 'Image',
               name: 'image',
               type: 'image',
            },
            {
               title: 'Skills',
               name: 'skills',
               type: 'array',
               of: [{ type: 'reference', to: [{ type: 'skill' }] }],
            },
            {
               title: 'Links',
               name: 'links',
               type: 'array',
               of: [{ type: 'reference', to: [{ type: 'projectLink' }] }],
            },
         ],
      },
      {
         title: 'Timeline Item',
         name: 'timelineItem',
         type: 'document',
         fields: [
            {
               title: 'Title',
               name: 'title',
               type: 'string',
            },
            {
               title: 'Description',
               name: 'description',
               type: 'text',
            },
            {
               title: 'Date',
               name: 'date',
               type: 'date',
            },
            {
               title: 'Type',
               name: 'type',
               type: 'string',
               options: {
                  list: [
                     { title: 'Employment', value: 'employment' },
                     { title: 'Education', value: 'education' },
                     { title: 'Course', value: 'course' },
                     { title: 'Conference', value: 'conference' },
                  ],
               },
            },
            {
               title: 'Link',
               name: 'link',
               type: 'url',
            },
         ],
      },
   ]),
});
