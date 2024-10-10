<script lang="ts">
  import EmailIcon from '../../../assets/email.svg?raw';
  import PersonIcon from '../../../assets/person.svg?raw';
  import YouTubeIcon from '../../../assets/youtube.svg?raw';
  import FacebookIcon from '../../../assets/facebook.svg?raw';
  import LinkedinIcon from '../../../assets/linkedin.svg?raw';
  import DocumentIcon from '../../../assets/document.svg?raw';
  import InstagramIcon from '../../../assets/instagram.svg?raw';
  import UserFollowIcon from '../../../assets/user-follow.svg?raw';
  import PhoneRingingIcon from '../../../assets/phone-ringing.svg?raw';

  import type { IconVariants } from './types';

  let classname: string = '';
  export { classname as class };
  export let variant: IconVariants;

  function getIcon() {
    switch (variant) {
      case 'email':
        return EmailIcon;
      case 'youtube':
        return YouTubeIcon;
      case 'person':
        return PersonIcon;
      case 'user-follow':
        return UserFollowIcon;
      case 'phone-ringing':
        return PhoneRingingIcon;
      case 'facebook':
        return FacebookIcon;
      case 'instagram':
        return InstagramIcon;
      case 'linkedin':
        return LinkedinIcon;
      case 'document':
        return DocumentIcon;
    }
  }
</script>

{@html getIcon()}
