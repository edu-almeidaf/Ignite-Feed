import styles from './Post.module.css';

export function Post() {
  return (
    <article className={ styles.post }>
      <header>
        <div className={ styles.author }>
          <img className={ styles.avatar } src="https://github.com/edu-almeidaf.png" />

          <div className={ styles.authorInfo }>
            <strong>Eduardo de Almeida Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de abril às 21:15h" dateTime="2022-04-23 21:15:05">Publicado há 1h</time>
      </header>

      <div className={ styles.content }>
        <p>Fala galeraa 👋</p>
        <p>Acabei de fazer um post muito bacana no meu Linkedin, sobre o dia que fui instrutor de Redux por um dia, corre lá ver! 🚀</p>
        <p><a href="https://www.linkedin.com/posts/almeidaedu_fala-rede-tudo-bom-quero-compartilhar-com-activity-7052781156987023360-FQrz?utm_source=share&utm_medium=member_desktop" target='_blank'>Clique aqui para ver</a></p>
        <p>
          <a href="#">#react</a>{' '}
          <a href="#">#linkedin</a>{' '}
          <a href="#">#redux</a>
        </p>
      </div>
    </article>
  )
}