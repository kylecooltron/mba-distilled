import { useState } from 'react'

// images
import vidThumbAbout from '../images/vidthumb-aboutbook.jpg'
import vidThumbTrends from '../images/vidthumb-trends.jpg'

const VideoPage = () => {

  const [videosLoaded, setVideosLoaded] = useState([false, false])

  const loadVideo = ( video ) => {
      const newState = videosLoaded.slice()
      newState[video] = true
      setVideosLoaded(newState)
    }

  return (
    <div className="App-video-page">
      <h1>Up-level Your Skills</h1>

        <div className="video-book-about">
            {
              videosLoaded[0] ?
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/sI2QZmWqpCE?modestbranding=1&controls=1&autoplay=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                :
                <img onClick={() => loadVideo(0)} src={vidThumbAbout} alt="video thumbnail about the book video" />
            }
          <h2>Watch to learn who we are, what we do, and where we’re going - 
          <em> for your career</em>  
            </h2>
        </div>

        <div>
          <h2>NEW VIDEO SERIES</h2>
          <p>Make the most of your career by watching the Youtube series.</p>
          <button>(Youtube Logo) Project Management Nation</button>
        </div>

        <div className='new-pms'>
          <h2>New PMs are Flooding to Our Profession</h2>
          <p>Demand for project managers is growing rapidly -- capitalize on this trend to grow your career and enhance your skills</p>
          <p>Discover how you can grow your career on <a href=""> Project Management Nation </a></p>
        </div>

        <div>
          <ul>
            <li>Learn about changing careers to become a project manager</li>
            <li>Learn tips for growing your project management career no matter your level of experience</li>
            <li>Learn how much more money project managers make than other professions (more than $100k salary on average!) . </li>
            <li>Learn about the industries with the greatest growth</li>
            <li>Learn what countries will see the greatest project management demand</li>
          </ul>
        </div>

        <div className="video-book-about">
          {
              videosLoaded[1] ?
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/sI2QZmWqpCE?modestbranding=1&controls=1&autoplay=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                :
                <img onClick={() => loadVideo(1)} src={vidThumbTrends} alt="video thumbnail about the book video" />
            }
          <p>This video is for career changers, early career project managers, and seasoned project management professionals. This video reviews Project Management Institute’s 2017 Job Growth and Talent Gap Report. Learn career tips to grow your career on Project Management Nation.</p>
        </div>

        <div className='get-organized'>
          <h2>Get Organized.</h2>
          <p>Do you ever find yourself overwhelmed with too many items on your to-do list? As project managers you have to be organized yourself before you can organize others. Subscribe to PM Nation to learn to become a better project manager. </p>
          <a href="">subscribe</a>
        </div>

        <div className="video-book-about">
          {
              videosLoaded[1] ?
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/sI2QZmWqpCE?modestbranding=1&controls=1&autoplay=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                :
                <img onClick={() => loadVideo(1)} src={vidThumbTrends} alt="video thumbnail about the book video" />
            }
            <h2>The Secret to Organizing Yourself.</h2>
          <p>This video covers a powerful technique used by former U.S. President Dwight D. Eisenhower and recommended by the Harvard Business Review. Balance Importance against Urgency to create a simple way to prioritize where you should be spending your time -- and spending your time on the most critical items is key to career progression in our field. </p>
        </div>

        <div className='interview-prep'>
          <h2>INTERVIEW PREP</h2>
          <p>LEARN TO MASTER THE MOST IMPORTANT QUESTIONS.</p>
        </div>

        <h2>Videos about preparing for a project management job interview.</h2>

        <div className="video-book-about">
          {
              videosLoaded[1] ?
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/sI2QZmWqpCE?modestbranding=1&controls=1&autoplay=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                :
                <img onClick={() => loadVideo(1)} src={vidThumbTrends} alt="video thumbnail about the book video" />
            }
            <h2>PM Interview Advice #1</h2>
            <p>
            In this video you will learn how to prepare for a project management job interview. This is part one of a series where you will first master how to get past the HR phone screen interview. Learn how HR recruiters work and what their motivations are so you can make the interview really work for you. Learn how to answer key interview questions around salary, start date, experience and education / certification. 
            </p>
            <p>
            The goal for the HR phone screen is to get to the next interview -- not to land the job. Keep your cool and learn to master the most important questions. 
            </p>
        </div>

        <div className="video-book-about">
          {
              videosLoaded[1] ?
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/sI2QZmWqpCE?modestbranding=1&controls=1&autoplay=1&rel=0" 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
                :
                <img onClick={() => loadVideo(1)} src={vidThumbTrends} alt="video thumbnail about the book video" />
            }
            <h2>PM Interview Advice #2</h2>
            <p>
            You have only 30 minutes to impress the hiring manager you’ve never talked to before. How do you prepare and what is likely to happen? 
            </p>
            <p>
            Learn how to master interview questions in the hiring manager phone interview. In this video you learn what questions are likely to be asked, learn fifteen sure-fire questions to ask in almost any interview situation, learn what motivates the hiring manager and master tips for succeeding in the interview. 
            </p>
            <p>
            Also learn what NOT to ask. These questions could get you dismissed as a candidate right away.
            </p>
        </div>

        <div>
          <h2>NEW VIDEO SERIES</h2>
          <p>Make the most of your career by watching the Youtube series.</p>
          <button>(Youtube Logo) Project Management Nation</button>
        </div>


    </div>
  )
}

export default VideoPage