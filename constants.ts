import { SocialLink, ThemeColor, GalleryImage } from './types';

export const THEME_COLORS: ThemeColor[] = [
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Purple', hex: '#8b5cf6' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Orange', hex: '#f97316' },
  { name: 'Pink', hex: '#ec4899' },
  { name: 'Cyan', hex: '#06b6d4' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://raw.githubusercontent.com/fahimblogs/fahimblogs.github.io/refs/heads/main/IMG_9299%20(1).jpg', alt: 'Profile Main' },
  { id: 2, url: 'https://raw.githubusercontent.com/fahimblogs/fahimblogs.github.io/refs/heads/uploads/1719079830400.jpg', alt: 'Moment 2' },
  { id: 3, url: 'https://raw.githubusercontent.com/jubairbro/Faw/refs/heads/main/photos/IMG_20250822_001904_975.jpg', alt: 'Moment 3' },
  { id: 4, url: 'https://raw.githubusercontent.com/jubairbro/Faw/refs/heads/main/photos/satoru-gojo-jujutsu-5120x2880-10828.png', alt: 'Anime Art' },
  { id: 5, url: 'https://raw.githubusercontent.com/jubairbro/Faw/refs/heads/main/photos/IMG_20251001_161822_246.jpg', alt: 'Moment 5' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'portfolio',
    platform: 'Portfolio',
    url: 'https://fahimblogs.com',
    username: 'fahimblogs.com',
    description: 'Discover my latest projects, articles, and blog posts.',
    color: '#3b82f6',
    iconUrl: 'https://fahimblogs.github.io/cropped-output-onlinepngtools-2-180x180.png'
  },
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://www.facebook.com/fahim.rahman.582/',
    username: '/fahim.rahman.582',
    description: "Let's connect and grow our network together.",
    color: '#1877f2',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/fahim.rahman.582/',
    username: '@fahim.rahman.582',
    description: 'See my life in photos and stories.',
    color: '#E1306C',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    url: 'https://www.youtube.com/@fahim582/',
    username: '@fahim582',
    description: 'Tutorials, tech, and creative videos — subscribe!',
    color: '#ff0000',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png'
  },
  {
    id: 'twitter',
    platform: 'X (Twitter)',
    url: 'https://www.twitter.com/Fahimrahman582/',
    username: '@Fahimrahman582',
    description: 'Short thoughts, project updates, and tech news.',
    color: '#000000',
    iconUrl: 'https://seeklogo.com/images/T/twitter-x-logo-0339F999CF-seeklogo.com.png?v=638264860180000000'
  },
  {
    id: 'telegram',
    platform: 'Telegram',
    url: 'https://t.me/fahim582/',
    username: '@fahim582',
    description: 'Message me instantly — open to tech and collab!',
    color: '#0088cc',
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/telegram-512.png'
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/Fahimrahman582',
    username: 'github.com/Fahimrahman582',
    description: 'Explore my open source code & contributions.',
    color: '#333333',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    url: 'https://wa.me/+8801834147344/',
    username: '+880 1834-147344',
    description: 'Chat with me directly for instant replies.',
    color: '#25D366',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:fahimrahman582@gmail.com/',
    username: 'fahimrahman582@gmail.com',
    description: 'Business, feedback or just say hello!',
    color: '#EA4335',
    iconUrl: 'https://www.freeiconspng.com/thumbs/email-icon/communication-email-2-icon-7.png'
  },
  {
    id: 'phone',
    platform: 'Call Me',
    url: 'tel:+8801834147344',
    username: '+880 1834-147344',
    description: 'For urgent matters, just call.',
    color: '#4ADE80',
    iconUrl: 'https://cdn.pixabay.com/photo/2021/10/29/21/40/phone-icon-6753051_960_720.png'
  }
];
