import { Postcard, Categories, PostWidget, Footer } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";
import { SwiperPosts } from "../sections";
export default function Home({ posts }) {
  return (
    
    <div>
   
      <div className="container mx-auto px-10 mb-8">
      <SwiperPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <Postcard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
   
    </div>

  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
