import { ROUTES, getPath } from '@app/utils';

export const socials = [
  {
    key: 'twitter',
    icon: 'brand-twitter',
    title: 'Twitter',
    url: getPath(ROUTES.SOCIAL_TWITTER, {})
  },
  {
    key: 'linkedin',
    icon: 'brand-linkedin',
    title: 'Linkedin',
    url: getPath(ROUTES.SOCIAL_LINKEDIN, {})
  },
  {
    key: 'instagram',
    icon: 'brand-instagram',
    title: 'Instagram',
    url: getPath(ROUTES.SOCIAL_INSTAGRAM, {})
  },
  {
    key: 'github',
    icon: 'brand-github',
    title: 'Github',
    url: getPath(ROUTES.SOCIAL_GITHUB, {})
  },
  {
    key: 'youtube',
    icon: 'brand-youtube',
    title: 'YouTube',
    url: getPath(ROUTES.SOCIAL_YOUTUBE, {})
  }
];
