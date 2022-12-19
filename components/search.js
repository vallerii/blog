import { useState } from "react";
import { connectStateResults } from "react-instantsearch-dom";
import { useRouter } from 'next/router';
import { getAllPostsForHome } from '../lib/api'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Search({ allPosts }) {
  const [query, setQuery] = useState('');
  const { asPath } = useRouter()
  return (
    <>
      <form action="" role="search">
        <input
          type="search"
          id="algolia_search"
          className="input"
          placeholder=" кольори..."
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        />
        <label htmlFor="algolia_search" type="submit">Search</label>
      </form>
      <>
        
        {query && (
          <p>Нема результатів</p>
        )}
        {query && (
          <ol>
            {allPosts.map((post) => (
                <a key={post.slug} href={asPath == '/posts/blog' ? post.slug : `posts/${post.slug}`}>
              <li className="resultsLink" key={post.objectID}>{post.title === query}</li>
              </a>
            ))}
          </ol>
            )}
      </>
    </>
  )
}