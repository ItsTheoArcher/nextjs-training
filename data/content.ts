export const contentData: ContentData = [
  {
    title: "Experience",
    institutions: [{
      name: 'The Warehouse Group',
      roles: [
        {
          id: "twg-integration-engineer-2024",
          title: "Integration Engineer",
          startDate: '2024-10-01',
          endDate: null,
          description: "Designed and built five Spring Boot microservices to replace legacy WSO2 order integrations, saving around $100k NZD a year in licensing and standing in for the tech lead on the migration. As sole developer, stabilised the Fulfilment team's Manhattan Active Omni integration, an estate of 30+ microservices and 30 Kafka Connect connectors, adding the logging, alerting and monitoring it had been missing. Also wrote a Claude Agent SDK skill that generates integration tests for Spring Boot services, cutting setup from days to minutes.",
          skills: ['Java', 'Spring Boot', 'Kafka', 'Kafka Connect', 'Kubernetes', 'Docker', 'PostgreSQL', 'Claude Agent SDK']
        },
        {
          id: "twg-full-stack-developer-2021",
          title: "Full Stack Developer",
          startDate: '2021-12-01',
          endDate: '2024-10-01',
          description: "Rewrote Salesforce Commerce Cloud front-end code on thewarehouse.co.nz and noelleeming.co.nz to fix a long tail of slow cart and checkout load times, worst on large baskets. Built the integration behind a loyalty programme that now serves a million users, and introduced ship-to-store as a delivery option to shift purchases towards local stores.",
          skills: ['JavaScript', 'TypeScript', 'Node.js', 'Jest', 'Salesforce Commerce Cloud']
        },
        {
          id: "twg-personalisation-manager-2020",
          title: "eCommerce Personalisation Manager",
          startDate: '2020-02-01',
          endDate: '2021-12-01',
          description: "Wrote the documentation and ran the training that scaled Dynamic Yield across the business, so 20 merchandisers could manage their own personalisation content. Built product recommendation features that won The Warehouse Group a 2021 Dynamic Yield Personalization Award.",
          skills: ["Dynamic Yield"]
        },
        {
          id: "twg-personalisation-developer-2019",
          title: "eCommerce Personalisation Developer",
          startDate: '2019-05-01',
          endDate: '2020-02-01',
          description: "Built personalised web experiences with Dynamic Yield and Salesforce Marketing Cloud. Set up tracking and analytics across web and email channels to support targeted advertising.",
          skills: ["JavaScript", "Dynamic Yield", "Salesforce Marketing Cloud"]
        }
      ]},
      {
        name: 'SLI Systems',
        roles: [
          {
            id: "sli-implementation-manager-2017",
            title: "Implementation Manager",
            startDate: '2017-02-01',
            endDate: '2018-06-01',
            description: "Managed implementations for 20+ clients including WHSmith and Iceland Foods. Also worked in pre-sales, helping the sales team win contracts by translating between the technical and business sides.",
            skills: ["Sales Engineering", "SaaS Implementation", "Pre-Sales"]
          },
          {
            id: "sli-software-engineer-2014",
            title: "Client-Facing Engineer",
            startDate: '2014-12-01',
            endDate: '2017-02-01',
            description: "Built SaaS search integrations for 50+ clients, including the data pipelines and web components on their eCommerce platforms.",
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
      roles: [
        {
          id: "uc-bsc-mathematics-2010",
          title: "BSc Mathematics",
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
  roles: Role[];
};

export type Role = {
  id: string;
  title: string;
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
