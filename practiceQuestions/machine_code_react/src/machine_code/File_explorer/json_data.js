export const fileStructure = [
  {
    id:'0',
    name:'root',
    isFolder:true,
    isRoot:true,
    children:[{
      id: 1,
      name: 'public',
      isFolder: true,
      isRoot:false,
      children: [
        {
          id: 2,
          name: 'index.html',
          isFolder: false,
          isRoot:false,
        },
      ],
    },
    {
      id: 3,
      name: 'src',
      isFolder: true,
      isRoot:false,
      children: [
        {
          id: 4,
          name: 'components',
          isFolder: true,
          isRoot:false,
          children: [
              {
                  id: 8,
                  name: 'FileExplorer.jsx',
                  isFolder: false,
                  isRoot:false,
                }
          ],
        },
        {
          id: 5,
          name: 'App.jsx',
          isFolder: false,
          isRoot:false,
        },
        {
          id: 6,
          name: 'App.css',
          isFolder: false,
          isRoot:false,
        },
      ],
    },
    {
      id: 7,
      name: 'package.json',
      isFolder: false,
      isRoot:false,
    }]
  }
  
  
];
