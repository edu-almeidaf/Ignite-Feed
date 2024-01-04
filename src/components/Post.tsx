import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
  text?: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
  tags: string[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {

  const [comments, setComments] = useState(['Post muito bacana hein?']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  const handleNewCommentChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    target.setCustomValidity('');
    setNewCommentText(target.value);
  }

  const handleNewCommentInvalid = ({ target }: InvalidEvent<HTMLTextAreaElement>) => {
    target.setCustomValidity('Esse campo é obrigatório!');
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => (
      comment !== commentToDelete
    ));
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={ styles.post }>
      <header>
        <div className={ styles.author }>
          <Avatar src={ post.author.avatarUrl } />

          <div className={ styles.authorInfo }>
            <strong>{ post.author.name }</strong>
            <span>{ post.author.role }</span>
          </div>
        </div>

        <time title={ publishedDateFormatted } dateTime={ post.publishedAt.toISOString() }>
          { publishedDateRelativeToNow }
        </time>
      </header>

      <div className={ styles.content }>
        {
          post.content.map((line) => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{ line.content }</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href={line.content} target='_blank'>{line.text}</a></p>
            }
          })
        }
        <p>
          {
            post.tags.map((tag) => (
              <a href="#" key={tag}>{ tag }{' '}</a>
            ))
          }
        </p>
      </div>

      <form className={ styles.commentForm } onSubmit={ handleCreateNewComment }>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={ newCommentText }
          onChange={ handleNewCommentChange }
          onInvalid={ handleNewCommentInvalid }
          required
        />

        <footer>
          <button type="submit" disabled={ isNewCommentEmpty }>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map((comment) => (
            <Comment
              key={ comment }
              content={ comment }
              onDeleteComment={ deleteComment }
            />
          ))
        }
      </div>
    </article>
  )
}