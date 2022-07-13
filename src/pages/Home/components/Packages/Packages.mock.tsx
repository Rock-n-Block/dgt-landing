import { ReactNode } from 'react';

type PackageFeature = {
  isIncluded: boolean;
  name: string;
  description: ReactNode;
};

type PackagesItem = {
  title: string;
  subtitle: string;
  features: PackageFeature[];
};

export const items: PackagesItem[] = [
  {
    title: 'Starter pack',
    subtitle: '$5,000<',
    features: [
      {
        isIncluded: true,
        name: 'SMM',
        description: (
          <>
            Generating paid/organic content in <span>1</span> of your social media
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Influence',
        description: (
          <>
            Selecting <span>1</span> influencer in accordance with the needs and potential of your
            audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'PR',
        description: (
          <>
            Content distribution through the most popular media (more than <span>3M+</span> total
            reach)
          </>
        ),
      },
      {
        isIncluded: false,
        name: 'Promo campaign in social media',
        description: 'Generating & managing community events for your audience',
      },
      {
        isIncluded: false,
        name: 'Marketing/Content strategy ',
        description: 'Creation the 1-month calendar and full marketing strategy for your project',
      },
      {
        isIncluded: false,
        name: 'Shilling/Hidden Marketing',
        description: 'Get the community to spread the word about your project at several platforms',
      },
      {
        isIncluded: false,
        name: 'Community building',
        description: 'Engagement ideas & Instructions Community events ideas & Instructions',
      },
    ],
  },
  {
    title: 'Medium',
    subtitle: '$10,000<',
    features: [
      {
        isIncluded: true,
        name: 'SMM',
        description: (
          <>
            Generating paid/organic content in <span>3</span> of your social media
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Influence',
        description: (
          <>
            Selecting <span>2</span> influencer in accordance with the needs and potential of your
            audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'PR',
        description: (
          <>
            Content distribution through the most popular media (more than <span>5M+</span> total
            reach)
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Promo campaign in social media',
        description: (
          <>
            Generating & managing <span>2</span> community events for your audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Marketing/Content strategy ',
        description: 'Creation the 1-month calendar and full marketing strategy for your project',
      },
      {
        isIncluded: false,
        name: 'Shilling/Hidden Marketing',
        description: 'Get the community to spread the word about your project at several platforms',
      },
      {
        isIncluded: false,
        name: 'Community building',
        description: 'Engagement ideas & Instructions Community events ideas & Instructions',
      },
    ],
  },
  {
    title: 'Maximum',
    subtitle: '$15,000<',
    features: [
      {
        isIncluded: true,
        name: 'SMM',
        description: (
          <>
            Generating paid/organic content in <span>4</span> of your social media
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Influence',
        description: (
          <>
            Selecting <span>4</span> influencer in accordance with the needs and potential of your
            audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'PR',
        description: (
          <>
            Content distribution through the most popular media (more than <span>10M+</span> total
            reach)
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Promo campaign in social media',
        description: (
          <>
            Generating & managing <span>2</span> community events for your audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Marketing/Content strategy ',
        description: 'Creation the 1-month calendar and full marketing strategy for your project',
      },
      {
        isIncluded: true,
        name: 'Shilling/Hidden Marketing',
        description: (
          <>
            Get the community to spread the word about your project at several platforms{' '}
            <span>Reddit, Telegram</span>
          </>
        ),
      },
      {
        isIncluded: false,
        name: 'Community building',
        description: 'Engagement ideas & Instructions Community events ideas & Instructions',
      },
    ],
  },
  {
    title: 'All-in-One',
    subtitle: '$20,000<',
    features: [
      {
        isIncluded: true,
        name: 'SMM',
        description: (
          <>
            Generating paid/organic content in <span>4</span> of your social media
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Influence',
        description: (
          <>
            Selecting <span>5+</span> influencer in accordance with the needs and potential of your
            audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'PR',
        description: (
          <>
            Content distribution through the most popular media (more than <span>15M+</span> total
            reach)
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Promo campaign in social media',
        description: (
          <>
            Generating & managing <span>2</span> community events for your audience
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Marketing/Content strategy ',
        description: 'Creation the 1-month calendar and full marketing strategy for your project',
      },
      {
        isIncluded: true,
        name: 'Shilling/Hidden Marketing',
        description: (
          <>
            Get the community to spread the word about your project at several platforms{' '}
            <span>Twitter, Reddit, Telegram</span>
          </>
        ),
      },
      {
        isIncluded: true,
        name: 'Community building',
        description: 'Engagement ideas & Instructions Community events ideas & Instructions',
      },
    ],
  },
];
