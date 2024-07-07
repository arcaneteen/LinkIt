import Link from 'next/link'
import MyHead from '../components/MyHead'
import styles from '../styles/apply.module.css'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to LinkIt, where we help you to gather all of your social media account at one place"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />
      <section className={styles.background + " min-h-screen flex justify-center items-center"}>
      <main className="w-full min-h-screen flex flex-col justify-center items-center text-white text-lg">
        <h1 className='text-center' > Welcome to <br/><span className='text-indigo-600 font-semibold'>LinkIt</span></h1>
        <h2>Add yourself to avail features used by top content creators</h2>
        <Link title='Explore more' className='bg-indigo-600 rounded-sm inline-block my-2 p-1 px-2 text-white' href="/apply">Click here!</Link>
      </main>
      </section>

    </>
  )
}
