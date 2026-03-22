const subjects = [
  {
    slug: 'biology',
    name: 'Biology',
    colour: '#2d9e7f',
    topics: [],
  },
  {
    slug: 'chemistry',
    name: 'Chemistry',
    colour: '#6c4fd4',
    topics: [],
  },
  {
    slug: 'computer-science',
    name: 'Computer Science',
    colour: '#d4748a',
    topics: [],
  },
  {
    slug: 'english',
    name: 'English',
    colour: '#a3b832',
    topics: [],
  },
  {
    slug: 'geography',
    name: 'Geography',
    colour: '#c49a1a',
    topics: [
      {slug: 'tropical-rainforest', title: 'Tropical Rainforests Y8',
        resources: { notes: true, quiz: false, flashcards: false}
      }
    ],
  },
  {
    slug: 'it',
    name: 'IT',
    colour: '#b8bec7',
    topics: [],
  },
  {
    slug: 'maths',
    name: 'Maths',
    colour: '#c0253d',
    topics: [
      {slug: 'algebra', title: 'Algebra e.g.',
        resources: { notes: false, quiz: false, flashcards: false }
      },
      {slug: '3d-shapes-surface-area', title: '3D Shapes — Surface Area',
        resources: { notes: true, quiz: false, flashcards: false }
      }
    ],
  },
  {
    slug: 'physics',
    name: 'Physics',
    colour: '#d4522a',
    topics: [
      {slug: 'energy', title: 'Energy Y9 1',
        resources: { notes: true, quiz: false, flashcards: false}
      }
    ],
  },
]

export default subjects
