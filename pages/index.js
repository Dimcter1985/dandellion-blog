
import { client } from '../utils/prismicPosts';
import Post from '../components/Post';

const Home = ({posts}) => {
  return (
    <>
      <h1>Dandelion Blog</h1>
      <div className="posts">
        {posts !== undefined &&
          posts.map((p) => {
            let title = p.title[0].text
            let key = `${p.date}+${title}`
            return <Post key={key} date={p.date} image={p.image} title={title} />
          })}
      </div>
    </>

  )
}
export default Home;



// at the bottom of your component file
export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query('')

  const posts = res.results.map((p) => {
    return p.data
  })

  return {
    props: {
      posts,
    },
  }
}
