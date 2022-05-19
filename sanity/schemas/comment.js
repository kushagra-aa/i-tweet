export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'profile Image',
      type: 'string',
    },
    {
      name: 'tweet',
      title: 'Tweet',
      type: 'reference',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
  ],
}
