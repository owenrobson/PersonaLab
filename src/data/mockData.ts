export interface Persona {
  id: string;
  name: string;
  avatar: string;
  jobTitle: string;
  industry: string;
  company: string;
  age: number;
  location: string;
  dataSource: string;
  createdAt: string;
  bio: string;
  goals: string[];
  needs: string[];
  painPoints: string[];
  behaviors: string[];
  values: string[];
}

export const mockPersonas: Persona[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'Marketing Director',
    industry: 'Technology',
    company: 'TechSolutions Inc.',
    age: 35,
    location: 'San Francisco, CA',
    dataSource: 'CRM Data',
    createdAt: '2023-10-15',
    bio: 'Sarah is a seasoned marketing professional with over 10 years of experience in the technology sector. She oversees a team of 15 marketers and is responsible for campaign strategy, budget allocation, and measuring ROI. She is tech-savvy and values data-driven decision making.',
    goals: [
      'Increase marketing ROI by 20% this year',
      'Streamline campaign reporting process',
      'Find better ways to attribute marketing efforts to sales',
      'Reduce customer acquisition costs'
    ],
    needs: [
      'Comprehensive analytics dashboard',
      'Time-saving automation tools',
      'Reliable performance metrics',
      'Integration with existing CRM'
    ],
    painPoints: [
      'Too much time spent on manual reporting',
      'Difficulty proving marketing impact to executives',
      'Siloed data across different platforms',
      'Inefficient approval workflows'
    ],
    behaviors: [
      'Researches solutions thoroughly before purchasing',
      'Relies heavily on peer recommendations',
      'Prefers demos over reading marketing materials',
      'Checks reviews and case studies'
    ],
    values: [
      'Efficiency and productivity',
      'Data-driven decision making',
      'Work-life balance',
      'Professional growth and learning'
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'IT Director',
    industry: 'Healthcare',
    company: 'MediCare Systems',
    age: 42,
    location: 'Boston, MA',
    dataSource: 'Survey Results',
    createdAt: '2023-09-22',
    bio: 'Michael is responsible for all IT infrastructure and security at a mid-sized healthcare organization. He manages a team of system administrators and security specialists. He is focused on ensuring system reliability, data security, and compliance with healthcare regulations.',
    goals: [
      'Enhance system security and compliance',
      'Reduce IT infrastructure costs',
      'Improve system uptime and reliability',
      'Modernize legacy systems'
    ],
    needs: [
      'Robust security solutions',
      'Cost-effective cloud migration options',
      'Simplified compliance reporting',
      'Reliable vendor support'
    ],
    painPoints: [
      'Complex regulatory compliance requirements',
      'Limited budget for system upgrades',
      'Difficulty finding qualified IT staff',
      'Growing security threats'
    ],
    behaviors: [
      'Prioritizes security over new features',
      'Conducts thorough vendor due diligence',
      'Prefers phased implementation approaches',
      'Relies on trusted advisor relationships'
    ],
    values: [
      'System reliability and uptime',
      'Data security and patient privacy',
      'Regulatory compliance',
      'Cost-effective solutions'
    ]
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'E-commerce Manager',
    industry: 'Retail',
    company: 'StyleTrend',
    age: 29,
    location: 'Miami, FL',
    dataSource: 'Web Traffic',
    createdAt: '2023-11-05',
    bio: 'Emily manages the online shopping experience for a fast-growing fashion retailer. She is responsible for the e-commerce platform, customer journey optimization, and increasing online sales conversion rates. She is data-savvy and keeps up with the latest digital marketing trends.',
    goals: [
      'Increase online conversion rate by 15%',
      'Reduce shopping cart abandonment',
      'Improve mobile shopping experience',
      'Enhance personalization capabilities'
    ],
    needs: [
      'User-friendly e-commerce platform',
      'Advanced analytics for customer behavior',
      'Effective A/B testing tools',
      'Seamless omnichannel capabilities'
    ],
    painPoints: [
      'Legacy systems limiting personalization',
      'High customer acquisition costs',
      'Difficulty integrating multiple platforms',
      'Balancing performance and feature richness'
    ],
    behaviors: [
      'Tests new tools and features regularly',
      'Frequently analyzes customer journey data',
      'Stays current with e-commerce trends',
      'Networks with other e-commerce professionals'
    ],
    values: [
      'Customer-first approach',
      'Data-driven optimization',
      'Innovation and creativity',
      'Brand consistency across channels'
    ]
  },
  {
    id: '4',
    name: 'David Wilson',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'Product Manager',
    industry: 'Software',
    company: 'CloudSoft Solutions',
    age: 34,
    location: 'Seattle, WA',
    dataSource: 'CRM Data',
    createdAt: '2023-08-30',
    bio: 'David oversees product development for a SaaS platform, balancing customer needs with business objectives. He works closely with engineering, design, and marketing teams to deliver product updates and new features. He is passionate about creating intuitive user experiences.',
    goals: [
      'Increase user adoption of new features',
      'Reduce customer churn rate',
      'Accelerate product development cycles',
      'Improve user satisfaction metrics'
    ],
    needs: [
      'Customer feedback collection tools',
      'Efficient project management solutions',
      'User behavior analytics',
      'Competitive analysis resources'
    ],
    painPoints: [
      'Balancing new features vs. fixing bugs',
      'Communication gaps between teams',
      'Prioritizing competing stakeholder demands',
      'Keeping up with market changes'
    ],
    behaviors: [
      'Conducts regular user interviews',
      'Prioritizes based on data and business impact',
      'Iterates quickly based on feedback',
      'Monitors competitor products closely'
    ],
    values: [
      'User-centered design',
      'Iterative improvement',
      'Cross-functional collaboration',
      'Evidence-based decision making'
    ]
  },
  {
    id: '5',
    name: 'Jennifer Kim',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'HR Director',
    industry: 'Manufacturing',
    company: 'GreenTech Industries',
    age: 45,
    location: 'Chicago, IL',
    dataSource: 'Survey Results',
    createdAt: '2023-10-02',
    bio: 'Jennifer leads human resources for a manufacturing company with 1,000+ employees. She oversees recruitment, employee relations, benefits administration, and workforce development. She is focused on building a positive company culture and improving employee retention.',
    goals: [
      'Reduce employee turnover by 10%',
      'Streamline recruitment processes',
      'Improve employee engagement scores',
      'Modernize HR systems and tools'
    ],
    needs: [
      'Integrated HR management system',
      'Effective employee engagement tools',
      'Recruitment analytics and insights',
      'Simplified compliance management'
    ],
    painPoints: [
      'Manual, time-consuming HR processes',
      'Difficulty attracting skilled talent',
      'Outdated HR technology',
      'Managing remote and on-site workforce'
    ],
    behaviors: [
      'Regularly collects employee feedback',
      'Researches HR best practices',
      'Advocates for employee needs to leadership',
      'Focuses on long-term retention strategies'
    ],
    values: [
      'Employee well-being',
      'Inclusive workplace culture',
      'Professional development',
      'Work-life balance'
    ]
  },
  {
    id: '6',
    name: 'Robert Jackson',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'CFO',
    industry: 'Financial Services',
    company: 'Summit Financial Group',
    age: 52,
    location: 'New York, NY',
    dataSource: 'CRM Data',
    createdAt: '2023-09-15',
    bio: 'Robert is a seasoned financial executive responsible for all financial operations and strategy at a mid-sized financial services firm. He oversees accounting, financial planning, risk management, and investor relations. He is detail-oriented and focused on sustainable growth.',
    goals: [
      'Improve financial forecasting accuracy',
      'Reduce operational costs',
      'Implement more robust risk management',
      'Streamline financial reporting'
    ],
    needs: [
      'Advanced financial analytics',
      'Automated reporting tools',
      'Integrated financial systems',
      'Compliance management solutions'
    ],
    painPoints: [
      'Time-consuming manual reporting',
      'Disparate financial systems',
      'Evolving regulatory requirements',
      'Data accuracy and consistency issues'
    ],
    behaviors: [
      'Conducts thorough cost-benefit analysis',
      'Requires strong ROI justification',
      'Prefers established, proven solutions',
      'Consults with trusted industry peers'
    ],
    values: [
      'Fiscal responsibility',
      'Data accuracy and integrity',
      'Regulatory compliance',
      'Transparent financial management'
    ]
  },
  {
    id: '7',
    name: 'Lisa Martinez',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'Customer Success Manager',
    industry: 'SaaS',
    company: 'EnvisionCRM',
    age: 31,
    location: 'Austin, TX',
    dataSource: 'Customer Support',
    createdAt: '2023-11-10',
    bio: 'Lisa ensures customer satisfaction and retention for a SaaS company. She manages customer onboarding, training, and ongoing support, and works to identify upsell opportunities. She is relationship-focused and passionate about helping customers achieve their goals.',
    goals: [
      'Improve customer retention rate',
      'Increase customer lifetime value',
      'Enhance customer onboarding experience',
      'Identify expansion opportunities'
    ],
    needs: [
      'Customer health scoring tools',
      'Usage analytics and insights',
      'Efficient case management system',
      'Customer feedback collection tools'
    ],
    painPoints: [
      'Limited visibility into customer usage',
      'Difficulty scaling personalized support',
      'Identifying at-risk customers early',
      'Balancing reactive support with proactive outreach'
    ],
    behaviors: [
      'Regularly checks in with key accounts',
      'Analyzes customer usage patterns',
      'Creates customized success plans',
      'Shares customer feedback with product team'
    ],
    values: [
      'Customer-centric approach',
      'Proactive problem-solving',
      'Relationship building',
      'Continuous improvement'
    ]
  },
  {
    id: '8',
    name: 'James Cooper',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    jobTitle: 'Operations Director',
    industry: 'Logistics',
    company: 'FastTrack Logistics',
    age: 47,
    location: 'Denver, CO',
    dataSource: 'Web Traffic',
    createdAt: '2023-08-20',
    bio: 'James oversees all operational aspects of a growing logistics company. He manages warehouse operations, transportation, inventory, and supply chain optimization. He is focused on increasing efficiency, reducing costs, and improving service quality.',
    goals: [
      'Optimize supply chain efficiency',
      'Reduce operational costs by 15%',
      'Improve delivery time performance',
      'Enhance inventory management'
    ],
    needs: [
      'End-to-end supply chain visibility',
      'Predictive analytics for demand forecasting',
      'Automated workflow management',
      'Real-time tracking and reporting'
    ],
    painPoints: [
      'Inefficient manual processes',
      'Limited visibility across supply chain',
      'Rising transportation costs',
      'Difficulty managing seasonal demand fluctuations'
    ],
    behaviors: [
      'Focuses on continuous process improvement',
      'Measures performance against KPIs',
      'Evaluates technology based on ROI potential',
      'Balances innovation with proven methods'
    ],
    values: [
      'Operational excellence',
      'Efficiency and cost-effectiveness',
      'Reliability and quality',
      'Data-driven decision making'
    ]
  }
];