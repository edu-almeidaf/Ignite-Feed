import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ post }) {
  const { author, content, publishedAt, tags, id } = post;

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={ styles.post } key={ id }>
      <header>
        <div className={ styles.author }>
          <Avatar src={ author.avatarUrl } />

          <div className={ styles.authorInfo }>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={ styles.content }>
        {
          content.map((line, i) => {
            if (line.type === 'paragraph') {
              return <p key={i}>{ line.content }</p>
            } else if (line.type === 'link') {
              return <p key={i}><a href={line.content} target='_blank'>{ line.text }</a></p>
            }
          })
        }
        <p>
          {
            tags.map((tag, i) => (
              <a href="#" key={i}>{ tag }{' '}</a>
            ))
          }
        </p>
      </div>

      <form className={ styles.commentForm }>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}