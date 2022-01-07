import S from '@sanity/desk-tool/structure-builder';

export default () =>
   S.list()
      .title('Content')
      .items([
         S.listItem()
            .title('Info')
            .child(
                  S.document()
                     .schemaType('info')
                     .documentId('info')
                  ),
         S.listItem()
            .title('About')
            .child(
                  S.document()
                     .schemaType('about')
                     .documentId('about')
                  ),
         S.divider(),
         ...S.documentTypeListItems()
            .filter((item) => !['about', 'info'].includes(item.getId())),
      ]);
