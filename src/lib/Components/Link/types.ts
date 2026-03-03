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
    href: 'https://www.instagram.com/emilydesousa.music',
    title: 'Instagram',
  },
  facebook: {
    href: 'https://www.facebook.com/emilycvdesousa',
    title: 'Facebook',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/emilydesousamusic',
    title: 'LinkedIn',
  },
  document: {
    href: 'docs/E-Desousa-Resume.pdf',
    title: 'Resume',
  },
  email: {
    href: '',
    title: 'Email',
    component: EmailLink,
  },
};
