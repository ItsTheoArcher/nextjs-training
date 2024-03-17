export const contentData = [
  {
    title: "Experience",
    institutions: [{ 
      name: 'The Warehouse Group',
      tenure: '4 yrs 11 mos',
      image: '/images/twg.jpg',
      roles: [{
          title: "Chapter Member - Solution Engineering",
          subTitle: "Auckland, NZ",
          date: "Dec 2021 - Present",
          description: "Design system, UI dev and web animations.",
        },
        {
          title: "eCommerce Personalisation Manager",
          subTitle: "Auckland, NZ",
          date: "Feb 2020 - Dec 2021",
          description: "Working for clients around the world.",
        },
        {
          title: "eCommerce Personalisation Support",
          subTitle: "Auckland, NZ",
          date: "May 2019 - Feb 2020",
          description: "Working for clients around the world.",
        }
      ]},
      {
        name: 'SLI Systems',
        tenure: '3 yrs 7 mos',
        image: '/images/sli.jpg',
        roles: [
          {
            title: "Implementation Manager",
            subTitle: "London, UK",
            date: "Feb 2017 - Jun 2018",
            description: "Working for clients around the world.",
          },
          {
            title: "Software Engineer",
            subTitle: "Christchurch, NZ",
            date: "Dec 2014 - Feb 2017",
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
          date: "Jan 2010 - Dec 2013",
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
    date: string;
    description: string;
  }[];
};

export type Content = {
  title: string;
  institutions: Institution[];
};



export type ContentData = Content[];
