export const featuredVideos = [
  {
    id: '1stutaG22_A',
    title: 'Discord Wrapped for Discord',
    description: 'Simple questions with surprising answers. Be the first to search for the answers or simply search "Discord Wrapped" to stay ahead. ',
    thumbnailUrl: '/Discord-Wrapped-for-Discord.jpg',
  },
  // {
  //   id: 'lykPixgrD8Y',
  //   title: 'Discord Wrapped for Discord',
  //   description: '解密 Durov 的挑战',
  //   thumbnailUrl: 'https://img.youtube.com/vi/lykPixgrD8Y/maxresdefault.jpg',
  // },
];

export interface FeaturedVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
}
