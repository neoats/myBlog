import React from 'react'
import {getPostDetails, getPosts,getPostsList} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';
const PostDetails = ({ post }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8 rounded-md'>
                <PostDetail post={post}/>
                <Author author={post.author}/>

                <CommentsForm slug={post.slug}/>
                <Comments slug={post.slug}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                 <div className='relative lg:sticky top-8'>
                    <PostWidget slug={post.slug}/>
                    <Categories/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}) {
const data = await getPostDetails(params.slug);
return{
    props:{post:data}
}
  }

  export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }