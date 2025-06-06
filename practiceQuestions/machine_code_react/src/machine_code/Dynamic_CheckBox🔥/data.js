export const checkBoxData = [
  {
    id: 2,
    name: 'Parent1',
    hasChildren: true,
    children: [
      {
        id: 6,
        name: 'Child1',
        hasChildren: false,
      },
      {
        id: 7,
        name: 'Child2',
        hasChildren: true,
        children: [
            {
              id: 9,
              name: 'Child1',
              hasChildren: false,
            },
            {
              id: 10,
              name: 'Child2',
              hasChildren: false,
            },
          ]
      },
    ],
  },
  {
    id: 3,
    name: 'Parent2',
    hasChildren: true,
    children: [
      {
        id: 8,
        name: 'Child1',
        hasChildren: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Parent3',
    hasChildren: false,
    children: [],
  },
];
