
import bookImg from '../images/book.png';

const Home = () => {
  return (
    <div className="App-home">

      <section className="section-out-now"> 
        <div className='book-paragraph'>
          <p>
            UP-LEVEL YOUR SKILLS 
            <small> & </small> 
            CAREER 
            <small> BY </small> 
            MASTERING 
            <small> THE </small> 
            BEST PARTS OF AN MBA PROGRAM.
          </p>
          <p>
            Book and training videos to help you lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className='book-box'>
          <img src={bookImg} alt="The MBA Distilled book" />
          <button>OUT NOW!</button>
        </div>
      </section>
    

      <section className='section-about-book'>
        <h3>Powerful and Practical</h3>
        <p>
          Certifications in project management are like birthdays: everybody has
          one. These days, you need something more to distinguish yourself in this
          profession...
        </p>
        <p>
          Bradley Clark's book, The MBA Distilled for Project & Program Professionals, is a practical guide for project and program managers who want to increase their professional skills by incorporating relevant theory, formulas, and other learnings from the Master of Business
          Administration (MBA) curriculum.
          </p>
        <p> The book provides an overview of
          core classes taught in most MBA programs, but with a specific lens on
          how to make the material practical for project practitioners.
        </p>
      </section>

      <hr />
      <section className='section-book-personas'>
        <h3>Who will benefit from the book:</h3>
        <div className='book-personas'>
          <div>
            <h4>Early Career PMs</h4>
            <p>The tools and techniques taught in this book will increase your professional toolkit and give you concepts you can immediately apply in your
                work. I try to use the tools demonstrated in this book whenever applicable in my work—but I don’t see these tools commonly used by others.
                If you can master even a few of these, you will be able to add
                substantial value and gain positive attention within your organization.
            </p>
          </div>
          <div>
            <h4>Mid-Career PMs</h4>
            <p>For those who have been executing projects for a number of years, this
                book can help in a couple of ways. First, for those who want to remain an individual contributor but take on larger or more complex work, this
                book will introduce you to techniques and tools that, when mastered, will
                prove you can manage more complex work. You can demonstrate these skills in real life in the project
                work you’re already doing.
            </p>
          </div>
          <div>
            <h4>PM/PMO Execs</h4>
            <p>Many of the tools and techniques demonstrated in this book apply to the
                kinds of problems a PMO leader needs to solve, especially as you look
                across an entire portfolio of work. These tools can help you optimize
                resources, clarify priorities, and estimate value. These tools can help you
                transform your PMO from a tactical execution team to a strategic value-generation organization. 
            </p>
          </div>

        </div>

      </section>

      <hr />

      <section className='section-book-reviews'>
        <h3>Reviews of the Book</h3>
        <div className='book-reviews'>
        <div>
            <p>
              “Brad is a leader and expert program manager. He has years of hands-on experience managing
              programs which deliver concrete business goals by aligning program execution with business operations.” 
            </p>
            <h4>Becky Oliver, Program Management Leader (get linkedin links) </h4>
          </div>
          <div>
            <p>
              “I really enjoyed the book. Anyone can pick up project management books focused on the art of
              running projects, but this book focuses on the intersection of a company operations, economics, and human element.” 
            </p>
            <h4>John Robbins, Senior Principal Program Manager</h4>
          </div>
          <div>
            <p>
              “Throughout 'MBA Distilled for Project and Program Management Professionals’, Bradley Clark adeptly synthesizes the fundamental components of MBA programs. His objective, candid,
              and digestible style can readily assist both those considering business education as well as seasoned professionals looking to refresh or refine their skills. In an era of seemingly infinite choices, this book provides a clear framework for understanding the capacity of the MBA.”
            </p>
            <h4>
              William Sellman,
              MD, MBA, District Medical Director, One Medical, San Francisco
            </h4>
          </div>
        </div>
      </section>


</div>
  )
}

export default Home