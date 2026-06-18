export interface HomeCase {
  company: string;
  subtitle: string;
  description: string;
  roles: string[];
  imageLabel?: string;
  image?: string;
  href?: string;
}

export const industryCases: HomeCase[] = [
  {
    company: 'Bliq',
    subtitle: 'Generation 3',
    description:
      'leading Hardware development - building a robust and scalable AV platform from concept to production.',
    roles: [
      'Hardware lead',
      'Industrial design',
      'Mechanical, electrical & systems engineering',
    ],
    imageLabel: 'img 002',
  },
  {
    company: 'Bace',
    subtitle: 'Mobile Hub',
    description:
      'Development of a mobile parcel locker and peer-to-peer storage system enabling flexible deployment with lower upfront costs.',
    roles: [
      'end to end development',
      'mechanical design & DFMA',
      'product scoping & IP',
    ],
    imageLabel: 'img 003',
    href: '/work/bace-mobile-hub',
  },
  {
    company: 'Bace',
    subtitle: 'Stationary Hub',
    description:
      'Development of a parcel station, taking early-stage prototype through to production readiness and market launch.',
    roles: ['NPI Engineering', 'Electrical Design', 'Product Compliance'],
    imageLabel: 'img 004',
  },
  {
    company: 'Bosch',
    subtitle: 'GS4000',
    description:
      'Supported R&D through hands-on design & engineering for heating appliance project.',
    roles: ['Engineering Analysis', 'Mechanical Design'],
    imageLabel: 'img 005',
  },
];

export const academicCases: HomeCase[] = [
  {
    company: 'Eco Flow',
    subtitle: 'Portable Tap Filter',
    description:
      'Development of an automated bath filling system from idea to prototype.',
    roles: [
      'Engineering Design & Mathematical Modelling',
      'Electronics & Embedded Development',
      'UI & Industrial Design',
    ],
    imageLabel: 'img 006',
  },
  {
    company: 'Puraqua',
    subtitle: 'Portable Tap Filter',
    description:
      'User Centric development of a Water filter from idea to production ready solution.',
    roles: [
      'Fluid Dynamics & Mechanical Engineering',
      'User research',
      'Rapid Prototyping',
    ],
    imageLabel: 'img 007',
  },
  {
    company: 'Unknown',
    subtitle: 'Bespoke Surfboards',
    description:
      'Founded a small business focused on building surfboards, and products around surfing.',
    roles: ['Design and Manufacturing', 'Supply chain management', 'Customer Success'],
    imageLabel: 'img 008',
  },
];
