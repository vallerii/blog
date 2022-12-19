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

  console.log(getAllPostsForHome(true))//обработать промисы сделать поиск
  
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
        
        {/*{searchResults?.hits.length === 0 && query && (
          <p>No results, keep searching.</p>
        )}
        {searchResults?.hits.length > 0 && query && (
          <ol>
            {visiblePosts.hits.map((hit) => (
                <a key={hit.slug} href={asPath == '/posts/blog' ? hit.slug : `posts/${hit.slug}`}>
              <li className="resultsLink" key={hit.objectID}>{hit.title}</li>
              </a>
            ))}
          </ol>
            )}*/}
      </>
    </>
  )
}