import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={ styles.cover }
      />

      <div className={ styles.profile }>
        <Avatar src="https://github.com/edu-almeidaf.png" />
        <strong>Eduardo de Almeida Fernandes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size="20" />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}