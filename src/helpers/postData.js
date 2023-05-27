export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/edu-almeidaf.png',
      name: 'Eduardo de Almeida Fernandes',
      role: 'Desenvolvedor Web'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content: 'Acabei de fazer um post muito bacana no meu LinkedIn, sobre o dia que fui instrutor de Redux por um dia, corre lá ver! 🚀',
      },
      {
        type: 'link',
        content: "https://www.linkedin.com/posts/almeidaedu_fala-rede-tudo-bom-quero-compartilhar-com-activity-7052781156987023360-FQrz?utm_source=share&utm_medium=member_desktop",
        text: 'Clique aqui para ver'
      },
    ],
    tags: ['#react','#linkedin', '#redux'],
    publishedAt: new Date('2023-04-23 21:15:05'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Tobiasitalo.png',
      name: 'Ítalo Tobias de Souza Dantas',
      role: 'Desenvolvedor Web'
    },
    content: [
      {
        type: 'paragraph',
        content: 'E aí pessoal 👋',
      },
      {
        type: 'paragraph',
        content: 'Fiz um post no linkedin sobre boas práticas na padronização de commits, algo essencial e que te destaca muito no mundo dev, pois mostra que você preza por organização em todas as etapas do seu projeto!',
      },
      {
        type: 'link',
        content: "https://www.linkedin.com/posts/tobiasitalo-dev_github-iuricodepadroes-de-commits-activity-7064222964174512129--cpV?utm_source=share&utm_medium=member_desktop",
        text: 'Vem dar uma conferida 🚀'
      },
    ],
    tags: ['#commits','#linkedin', '#programação'],
    publishedAt: new Date('2023-05-02 14:53:27'),
  }
]