import { Header } from "./components/Header";
import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./helpers/postData";

export function App() {
  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Post
                key={post.id}
                post={ post }
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}
