import Search from "./search";


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Interior.Blog
      </h1>
      <div>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          A blog where you learn about trends in the interior.
        </h4>

        <div className="box">
          <h5 className="text-center md:text-left text-lg mt-5 md:pl-8">
            Що ви шукаєте?
          </h5>

          <Search/>
       </div>
        
      </div>
      

    </section>
  )
}
