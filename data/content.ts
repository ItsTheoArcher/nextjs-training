export const contentData = [
  {
    title: "Experience",
    institutions: [{ 
      name: 'The Warehouse Group',
      image: '/images/twg.jpg',
      roles: [{
          title: "Chapter Member - Solution Engineering",
          subTitle: "Auckland, NZ",
          startDate: '2021-12-01',
          endDate: null,
          description: "Design system, UI dev and web animations.",
          skills: ['Salesforce Commerce Cloud', 'JavaScript', 'Agile Scrum', 'Rhino JS']
        },
        {
          title: "eCommerce Personalisation Manager",
          subTitle: "Auckland, NZ",
          startDate: '2020-02-01',
          endDate: '2021-12-01',
          description: "Working for clients around the world.",
        },
        {
          title: "eCommerce Personalisation Support",
          subTitle: "Auckland, NZ",
          startDate: '2019-05-01',
          endDate: '2020-02-01',
          description: "Working for clients around the world.",
        }
      ]},
      {
        name: 'Career Break',
        image: '/images/travel.svg',
        roles: [
          {
            title: "Backpacking Europe & SEA",
            subTitle: "",
            startDate: '2018-06-01',
            endDate: '2019-05-01',
            description: "Working for clients around the world.",
          }
        ]
      },
      {
        name: 'SLI Systems',
        image: '/images/sli.jpg',
        roles: [
          {
            title: "Implementation Manager",
            subTitle: "London, UK",
            startDate: '2017-02-01',
            endDate: '2018-06-01',
            description: "Working for clients around the world.",
          },
          {
            title: "Software Engineer",
            subTitle: "Christchurch, NZ",
            startDate: '2014-12-01',
            endDate: '2017-02-01',
            description: "Working for clients around the world.",
          }
        ]
      }
    ],
  },
  {
    title: "Education",
    institutions: [{
      name: 'University of Canterbury',
      tenure: '3 yrs',
      image: '/images/uc.svg',
      roles: [
        {
          title: "BSc Mathematics",
          subTitle: "Christchurch, NZ",
          startDate: '2010-01-01',
          endDate: '2013-12-01',
          description: "Minor subjects: Computer Science, Economics",
        },
      ],
    }]
  }
];

export type Institution = {
  name: string,
  tenure: string,
  image: string,
  roles: {
    title: string;
    subTitle: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
};

export type Content = {
  title: string;
  institutions: Institution[];
};



export type ContentData = Content[];
