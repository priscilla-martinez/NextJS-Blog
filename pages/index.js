import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        // By returning 'allPostsData' inside 'props' the blog posts will be passed to 'Home' below
        props: {
            allPostsData,
        },
    }
} 

export default function Home({ allPostsData }) {
  return (
    <Layout home>
        <Head>
            <title>Priscilla's Blog</title>
        </Head>

        <section className={utilStyles.headingMd}>
            <p>
                [Hello! I'm learning Next.JS because we are rebuilding the FMC website with it.]
            </p>
            <p>
                (This is a sample website - youll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
        </section>

        {/* Displaying blog posts */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        {title}
                        <br/>
                        {id}
                        <br/>
                        {date}
                    </li>
                ))}
            </ul>   
        </section>
    </Layout>
  )
}