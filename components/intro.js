import Search from "./search";


export default function Intro({allPosts}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Interior.Blog
      </h1>
      <div>
        <div className="box">
          <h5 className="text-center md:text-left text-lg mt-5 md:pl-8">
            Що ви шукаєте?
          </h5>

          <Search allPosts={allPosts}/>
       </div>
        
      </div>
      

    </section>
  )
}
