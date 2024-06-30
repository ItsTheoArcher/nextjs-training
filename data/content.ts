export const contentData = [
  {
    title: "Experience",
    institutions: [{ 
      name: 'The Warehouse Group',
      image: '/images/twg.jpg',
      roles: [{
          title: "Full Stack Developer",
          subTitle: "Auckland, NZ",
          startDate: '2021-12-01',
          endDate: null,
          description: "Develop and optimise the eCommerce platform for iconic NZ retailers The Warehouse and Noel Leeming",
          skills: ['JavaScript', 'TypeScript', 'Node.js', 'Jest', 'Git', 'Agile Scrum', 'Salesforce Commerce Cloud', 'Express']
        },
        {
          title: "eCommerce Personalisation Manager",
          subTitle: "Auckland, NZ",
          startDate: '2020-02-01',
          endDate: '2021-12-01',
          description: "Managing a small team of marketing technology experts to develop and implement data-driven personalisation initiatives.",
          skills: ["Stakeholder Management", "Dynamic Yield", "Salesforce Marketing Cloud"]
        },
        {
          title: "eCommerce Personalisation Developer",
          subTitle: "Auckland, NZ",
          startDate: '2019-05-01',
          endDate: '2020-02-01',
          description: "Working with a small team of marketing technology experts to develop and implement data-driven personalisation initiatives.",
          skills: ["JavaScript", "Dynamic Yield", "Google Tag Manager", "Salesforce Marketing Cloud"]
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
            description: "Travelling solo around Europe and South East Asia",
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
            description: "Managing the implementation of SLI's suite of eCommerce centric SaaS products for clients including WHSmith, and Iceland Foods. Providing technical pre-sales support.",
            skills: ["Sales Engineering", "Project Management", "Customer Success"]
          },
          {
            title: "Software Engineer",
            subTitle: "Christchurch, NZ / London, UK",
            startDate: '2014-12-01',
            endDate: '2017-02-01',
            description: "Implementation of SLI's suite of eCommerce centric SaaS products including Learning Search, Product Recommendations, and Site Champion.",
            skills: ["JavaScript", "HTML", "CSS", "Java", "SaaS"]
          }
        ]
      }
    ],
  },
  {
    title: "Education",
    institutions: [{
      name: 'University of Canterbury',
      image: '/images/uc.svg',
      roles: [
        {
          title: "BSc Mathematics",
          subTitle: "Christchurch, NZ",
          startDate: '2010-01-01',
          endDate: '2013-12-01',
          description: "Other subjects: Computer Science, Economics",
        },
      ],
    }]
  }
];

export type Institution = {
  name: string,
  image: string,
  roles: Role[];
};

export type Role = {
  title: string;
  subTitle: string;
  startDate: string;
  endDate: string | null;
  description: string;
  skills?: string[];
}

export type Content = {
  title: string;
  institutions: Institution[];
};



export type ContentData = Content[];
