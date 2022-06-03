import { ReactNode } from 'react';

import {
  CommunityManagementIcon,
  InfluencerMarketingIcon,
  MarketingStrategyCreationIcon,
  PublicRelationsIcon,
  ReputationManagementIcon,
  SocMediaMarketingIcon,
} from '@/assets/img';

type WhatWeDoBestMockItem = {
  icon: ReactNode;
  title: string;
  text: string;
};

export const items: WhatWeDoBestMockItem[] = [
  {
    icon: <CommunityManagementIcon />,
    title: 'Community Management',
    text: 'Frequent engagement with your audience on social media will make them remember you, and most of all, a loyalty bond will be formed and maintained through consistent posting.',
  },
  {
    icon: <PublicRelationsIcon />,
    title: 'Public Relations',
    text: 'Researching your project and coming up with topic ideas that will explain your product to the community in simple words and build trust. With contacts at the largest crypto publishers and media, we help you to secure organic coverage from the biggest names in the blockchain industry.',
  },
  {
    icon: <InfluencerMarketingIcon />,
    title: 'Influencer marketing',
    text: 'We carefully select influences in accordance with your needs and potential. Whether you are looking for a YouTube superstar or an Instagram micro-influencer, you’re in good company.',
  },
  {
    icon: <SocMediaMarketingIcon />,
    title: 'Social Media Marketing',
    text: 'We extend our SMM services on multiple platforms like Telegram, Twitter, Reddit, and Discord for marketing your products.',
  },
  {
    icon: <ReputationManagementIcon />,
    title: 'Reputation management',
    text: 'We outreach your projects online and track the responses of traffic gained for your project. We expand your audience by pushing the community to spread the word about your project',
  },
  {
    icon: <MarketingStrategyCreationIcon />,
    title: 'Marketing Strategy Creation',
    text: 'We have you covered with our wide range of services and expertise. The marketing strategy that we layout is based on your company’s business needs and goals, and we keep an ongoing dialogue to stay updated.',
  },
];
