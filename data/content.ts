export const contentData: ContentData = [
  {
    title: "Experience",
    institutions: [{ 
      name: 'The Warehouse Group',
      image: '/images/twg.jpg',
      roles: [
        {
          id: "twg-integration-engineer-2024",
          title: "Integration Engineer",
          subTitle: "Auckland, NZ",
          startDate: '2024-10-01',
          endDate: null,
          description: "Built a Kafka/Spring Boot microservice processing 320k inventory records per hour. Leading the migration of legacy WSO2 integrations to Spring Boot, and consolidated six services into one along the way. Improved observability across order management with Kibana and New Relic. Also present quarterly tech reviews to 100+ stakeholders, stepping in for the team manager.",
          skills: ['Java', 'Spring Boot', 'Kafka', 'Azure API Manager', 'Docker', 'Kubernetes', 'CI/CD']
        },
        {
          id: "twg-full-stack-developer-2021",
          title: "Full Stack Developer",
          subTitle: "Auckland, NZ",
          startDate: '2021-12-01',
          endDate: '2024-10-01',
          description: "Cut cart and checkout response times by over 50% on thewarehouse.co.nz and noelleeming.co.nz. Built the Salesforce Commerce Cloud integration for a loyalty program that now serves a million users. Introduced ship-to-store as a delivery option to shift purchases toward local stores.",
          skills: ['JavaScript', 'TypeScript', 'Node.js', 'Jest', 'Salesforce Commerce Cloud']
        },
        {
          id: "twg-personalisation-manager-2020",
          title: "eCommerce Personalisation Manager",
          subTitle: "Auckland, NZ",
          startDate: '2020-02-01',
          endDate: '2021-12-01',
          description: "Ran the rollout of an internal personalisation platform, letting 20 merchandisers manage their own content. Helped build the product recommendation features that won a customer experience award.",
          skills: ["Dynamic Yield", "Salesforce Marketing Cloud"]
        },
        {
          id: "twg-personalisation-developer-2019",
          title: "eCommerce Personalisation Developer",
          subTitle: "Auckland, NZ",
          startDate: '2019-05-01',
          endDate: '2020-02-01',
          description: "Implemented tracking and analytics across web and email channels, improving targeted advertising ROI. Built personalised web experiences using Dynamic Yield and Salesforce Marketing Cloud.",
          skills: ["JavaScript", "Dynamic Yield", "Salesforce Marketing Cloud"]
        }
      ]},
      {
        name: 'Career Break',
        image: '/images/travel.svg',
        roles: [
          {
            id: "career-break-backpacking-2018",
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
            id: "sli-implementation-manager-2017",
            title: "Implementation Manager",
            subTitle: "London, UK",
            startDate: '2017-02-01',
            endDate: '2018-06-01',
            description: "Managed implementations for 20+ clients including WHSmith and Iceland Foods. Spent a lot of time in pre-sales too, helping the commercial team win contracts by bridging the technical and business sides.",
            skills: ["Sales Engineering", "SaaS Implementation", "Pre-Sales"]
          },
          {
            id: "sli-software-engineer-2014",
            title: "Client-Facing Engineer",
            subTitle: "Christchurch, NZ / London, UK",
            startDate: '2014-12-01',
            endDate: '2017-02-01',
            description: "Implemented SaaS search integrations for 50+ clients, building data pipelines and web components across eCommerce platforms.",
            skills: ["JavaScript", "Java", "Data Pipelines", "eCommerce"]
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
          id: "uc-bsc-mathematics-2010",
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
  id: string;
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
