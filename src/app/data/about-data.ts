export type AboutBlock = {
  title: string;
  paragraphs: string[];
  list?: string[];
  secondaryTitle?: string;
  secondaryList?: string[];
  paragraphsAfter?: string[];
};

export const ABOUT_CONTENT: { blocks: AboutBlock[] } = {
  blocks: [
    {
      title: '',
      paragraphs: [
        'Why do so many people work hard, succeed on the outside, and still feel empty on the inside?',
        'I saw it everywhere.',
        'Projects that look strong but feel hollow. Brands that sell well but say nothing. People chasing money, status, and growth -- while slowly losing themselves.',
        'And at some point, I realized something uncomfortable:',
        'The problem wasn’t skill. It was intention.',
        '',
        'Most businesses don’t fail because of bad ideas. They fail because they forget the human being. The customer becomes a number. The market becomes a target. And money becomes the goal -- not the result. That kind of work may grow, but it never satisfies.',
        'I didn’t want to build things like that. And I didn’t want to help others do it either.'
      ]
    },
    {
      title: 'A different way',
      paragraphs: [
        'I believe work is not meant to exploit. It’s meant to serve. Not in a weak way. Not in a naive way. But in a deeply human way.',
        'Real service creates clarity. Clarity creates trust. Trust creates value. And value creates sustainable success. In the right order.'
      ]
    },
    {
      title: 'This is where my work begins',
      paragraphs: [
        'I work with people who have something real inside them:'
      ],
      list: [
        'a vision',
        'a message',
        'a reason why their project should exist'
      ],
      secondaryTitle: 'But they struggle to express it. They feel unclear. Disconnected. Misaligned. <br/>So we start before design. Before colors. Before logos. We start with truth.',
     
    },
    {
      title: 'My role',
      paragraphs: [
        'As a Visual Director, my work is to help you see your vision clearly first. Clarity gives you: direction, identity, stability.'
      ],
      list: [
        'direction',
        'identity',
        'stability'
      ],
      secondaryTitle: 'Then, together, we translate that clarity into:',
      secondaryList: [
        'Brand Strategy',
        'Visual Identity',
        'Language',
        'Design'
      ],
      paragraphsAfter: [
        'So your message becomes visible. Your value becomes felt. And the right people recognize you -- and remember you.'
      ]
    },
    {
      title: 'Who this is for (and who It’s not)',
      paragraphs: [
        'This work is not for everyone. It’s not for people who want quick money. Or empty trends. Or a shiny image without meaning.',
        'It’s for people who want to build something honest. Something human. Something that serves -- and succeeds without losing its soul.'
      ]
    },
    {
      title: 'This is my story',
      paragraphs: [
        'I don’t believe business is about becoming rich at any cost. I believe clarity, service, and meaning come first. And when they do -- success follows. Quietly. Naturally. And without breaking you from the inside.'
      ]
    }
  ]
};
