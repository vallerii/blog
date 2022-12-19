import React, { useState } from 'react';
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, showMore }) {
 const [ postNum, setPostNum] = useState(0); // Default number of posts displayed
  function handleClick() {
   setPostNum(prevPostNum => prevPostNum + 2) 
 }

 posts.length === postNum ? showMore = false : showMore = true;

 return (
   <section>
     {postNum > 0 && (
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Більше розповідей
      </h2>
     )}
     <div className="grid grid-cols-0 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
       {posts.slice(0, postNum).map((post) => (
         <PostPreview
           key={post.slug}
           title={post.title}
           coverImage={post.coverImage}
           date={post.date}
           author={post.author}
           slug={post.slug}
           excerpt={post.excerpt}
         />
       ))}
     </div>

    {showMore && (
         <button className="load-more mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6" onClick={handleClick}>загрузити більше</button>
       )}
   </section>
 )
}
