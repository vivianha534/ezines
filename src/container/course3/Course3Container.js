import React from 'react'
import '../CourseContainer.css'
import ThirdCourseMeat from '../../assets/meatCoursePhotos/ThirdCourseMeat.svg'

const Course3Container = () => {
    return (
        <div className="course">
            <img className="coursePhoto" src={ThirdCourseMeat} />
            <h1 className='title'>Third Course | Food For Thought </h1>
            <h2 className="poemTitle">Art</h2>
            <p className="text">I have a neighbor that has an art studio so I go over and take <br/> my time and think what am I going to paint.  I saw abstract <br/> work so I said, “I will do abstract,” so I did and I &lt;3 art. <br/> When I go in I smell paint in the air.  I get a canvas.  I touch it. <br/> It’s rough.  When I paint I feel fantastic. <br/> <br/> ~ Isabella </p>
            <p className="poemTitle">A New World Art </p>
            <p className="text"> A New World is created <br/> with no limits, no expectations <br/> A new world that has no tension: <br/> Attention is not a requirement <br/> A new world is created <br/> A world of art. <br/> <br/> These new worlds do not <br/> have to worry about being judges <br/> or that it’s worthless <br/> You create these new worlds <br/> to show your true emotions <br/> in a way never thought possible in <br/> these New Worlds. <br/> New Worlds known as art. <br/> <br/> ~ Cas </p>
            <p className="poemTitle"> The Beating of Your Heart is the Rhythm of the Music Flow </p>
            <p className="text"> Music is made differently for different people, and people influence the creativity and harmony that is infused into the music that is created by everyday people trying to get their souls to speak, trying to define rules by using words. Words grouped into an army of lyrics that create a voice in a crowd of millions. <br/> <br/>~ Ivan </p>
            <p className="poemTitle"> (Very) Personal </p> 
            <p className="text">I am fifteen. I know how to breathe, to laugh, to exist.  An existence composed of half-notes in legato and staccato. Alexei <br/> <br/> How Potatoes Got Out Into the World <br/> <br/>  Potatoes evolved <br/> Grew legs and wandered the earth <br/> Finding a bigger world. <br/> <br/> ~ Johnna  </p>
            <p className="poemTitle"> Home is...</p> 
            <p className="text">Home is a place I can call home <br/> Home is a warm hug & the smell of cinnamon <br/> Home is a place where I can lose myself <br/> Home is my Mom's cooking <br/><br/>~ Jackson, Tara, David, Alaniz </p>
            <p className="poemTitle"> Breaking the Sentence </p> 
            <p className="text"> Why imprison yourself in the past when you have a future? <br/> Why dwell in the memories of long ago <br/> That should be learned from and buried in the distant graveyard <br/> What do you gain? <br/> But a sentence of eternal suffering <br/> Why let those painful memories shape who you are <br/> When you can move forward in life? <br/><br/>~ Jocelyn  </p>
            <div className="courseButtonContainer">
                <a href="/course4"><button >Next -></button></a>
            </div>
        </div>
    )
}

export default Course3Container
