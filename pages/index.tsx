import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Home: NextPage = () => {
  return (


    <Layout pageTitle='Home Page'>
      <Image src="/profile.jpg" width={200} height={200} alt="profile" />
      <h1 className={styles['title-homepage']}>Welcome Hilman</h1>
    </Layout>

  )
}

export default Home
