import { ROUTES, getPath } from '@app/utils';

export const socials = [
  {
    key: 'twitter',
    icon: 'app/twitter',
    title: 'Twitter',
    url: getPath(ROUTES.SOCIAL_TWITTER, {})
  },
  {
    key: 'linkedin',
    icon: 'app/linkedin',
    title: 'Linkedin',
    url: getPath(ROUTES.SOCIAL_LINKEDIN, {})
  },
  {
    key: 'instagram',
    icon: 'app/instagram',
    title: 'Instagram',
    url: getPath(ROUTES.SOCIAL_INSTAGRAM, {})
  },
  {
    key: 'github',
    icon: 'app/github',
    title: 'Github',
    url: getPath(ROUTES.SOCIAL_GITHUB, {})
  },
  {
    key: 'youtube',
    icon: 'app/youtube',
    title: 'YouTube',
    url: getPath(ROUTES.SOCIAL_YOUTUBE, {})
  }
];
