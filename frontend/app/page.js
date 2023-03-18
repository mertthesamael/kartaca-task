import styles from "./style.module.scss"
import { Inter } from 'next/font/google'
import { HomePageContainer } from '@/containers/homepage-container'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={styles.home}>
    <HomePageContainer/>
    </main>
  )
}
