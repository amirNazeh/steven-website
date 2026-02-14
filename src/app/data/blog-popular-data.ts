export type BlogPost = {
  title: string;
  description: string;
  image: string;
  heroImage?: string;
  slug: string;
  author?: string;
  published?: string;
  content?: string[];
  blocks?: Array<{ title: string; paragraphs: string[] }>;
  href?: string;
  category?: string;
  type?: 'blog' | 'video';
};

export const BLOG_SECTION = {
  title: 'Our Blog',
  popularTitle: 'Most Popular',
  topicsTitle: 'Topics',
  topicsSubtitle: 'Showing 1 through 12 of 610'
};

export const PopularBlog: BlogPost[] = [
 {
    title: 'The true hunger <br/> isn\'t for success',
    description: 'A reflection on hustle culture, meaning, and choosing a quieter inner life.',
    image: '/assets/blog/topic-4-cover.jpg',
    heroImage: '/assets/blog/topic-4-hero.jpg',
    slug: 'the-true-hunger-isnt-for-success',
    href: '#',
    category: 'Life',
    type: 'blog',
    blocks: [
      {
        title: '',
        paragraphs: [
          'Hello, I am Stephen. I am 26, and for the past years, I have been part of the job market as a graphic designer. And recently, like many, I have been swept into hustle culture -- the loud voice that tells us we must always be doing more, working harder, achieving faster. That our worth is measured by how much we produce, how much we earn, and how much we impress.',
          'But something deep inside me began to push back.'
        ]
      },
      {
        title: 'hustle culture',
        paragraphs: [
          'I started to realize that hustle <u> culture</u> is more than just a work ethic -- it is a cry. A desperate, modern cry rising from hearts that are empty and hungry. It is the echo of souls aching to be seen, to be loved, to matter. The goal is sold to us as success, wealth, and pleasure -- but beneath the surface lies exhaustion, emptiness, and the quiet erosion of the soul.',
          'I remember scrolling through Instagram, seeing post after post glorifying the grind: waking up at 5 a.m., working 12 hours a day, chasing milestones and money and "motivation." It looked powerful. It looked impressive.',
          'But it also looked... tired. Lonely. Empty. Like a machine trying to feel alive.'
        ]
      },
      {
        title: 'Imagine a young man running in circles',
        paragraphs: [
          'He runs faster every day. People cheer, clap, and shout, "Go! Keep going! You are winning!"',
          'But one day, he stops -- not because he reached the finish line, but because he realizes there is no line. He has been running in a circle the whole time. Round and round, trying to fill a void that only grows deeper with every lap.',
          'That is hustle culture. A beautiful cage. A high-speed chase after things that cannot satisfy.',
          'And slowly, you realize: the cost is your soul. Your presence. Your joy. Your very being.',
          'The true hunger is not for success. It is for meaning. And the deep thirst is not for wealth -- it is for connection, wholeness, and being fully alive.'
        ]
      },
      {
        title: 'I began to choose differently',
        paragraphs: [
          'I began to value moments of reflection. To sit quietly with myself. To pray. To read. To invest in my soul, not just my resume. I began asking myself, "Who am I becoming?" rather than "What am I producing?" I gave myself permission to rest. To love. To feel, notice and understand myself, to be.',
          'Because the deepest kind of strength does not come from hustle -- it comes from rootedness. From building a rich, quiet, intentional inner life.',
          'The most fruitful work flows from a heart that is whole.',
          'The most beautiful impact comes from someone who knows how to be -- not just do.',
          'So I began to believe that being matters more than doing. That sitting with a friend, looking someone in the eyes, feeling joy in the moment -- is not a distraction from purpose, but the very essence of it.'
        ]
      },
      {
        title: 'To every young person out there:',
        paragraphs: [
          'Yes, dream big.',
          'Yes, work hard, be excellent.',
          'But do not run in circles.',
          'Stop. Breathe. Listen to your heart. Do not let your worth be defined by hustle. Because life is not about how much you can prove. It is about how deeply you can live.',
          'In the end, it is not about what we built. It is about who we became while building it.'
        ]
      }
    ]
  }
];
