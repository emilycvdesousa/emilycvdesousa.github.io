import type { IconVariants } from '../Icon/types';
import EmailLink from '../EmailLink/EmailLink.svelte';

export type LinkTypes = IconVariants;

export interface LinkArg {
  href: string;
  title: string;
  component?: ConstructorOfATypedSvelteComponent;
}

export const defaultArg: LinkArg = {
  href: '',
  title: '',
};

export const linkArgs: { [variant: string]: LinkArg } = {
  instagram: {
    href: 'https://www.instagram.com/emilycvdesousa',
    title: 'Instagram',
  },
  facebook: {
    href: 'https://www.facebook.com/emilycvdesousa',
    title: 'Facebook',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/emilycvdesousa',
    title: 'LinkedIn',
  },
  youtube: {
    href: 'https://www.youtube.com/',
    title: 'Youtube',
  },
  document: {
    href: 'Docs/E-Desousa-Resume.pdf',
    title: 'Resume',
  },
  email: {
    href: '',
    title: 'Email',
    component: EmailLink,
  },
};
