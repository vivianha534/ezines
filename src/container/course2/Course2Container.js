import React from 'react'
import '../CourseContainer.css'
import SecondCourseMeat from "../../assets/meatCoursePhotos/SecondCourseMeat.svg"

const Course2Container = () => {
    return (
        <div className="course">
            <img className="coursePhoto" src={SecondCourseMeat} />
            <h1 className='title'>Second Course | Made With Love </h1>
            <h2 className="loveIs">Love Is</h2>
            <p className="text">Love is beautiful as a rose <br /> Love is heartbreaking like someone dropping a ice-cream cone on the floor <br /> Love is strong like a man that goes to the gym a lot to lift up weights <br /> Love is scary like fright night at six flags <br /> Love is hurtful like getting a shot at the doctor <br /> Love is a map that leads you to your destiny <br /> Love is a map that shows you the right one direction <br /> <br /> ~ Gabby <br /> </p>
            <p className="text"> Love is a warm cup of coffee in the morning. <br /> <br /> ~ Ivette <br /></p>
            <p className="text"> Love is when someone shares pizza with you. <br /> <br /> ~ Oscar <br /></p>
            <p className="text"> Love is passion. It’s a feeling you get when you feel special to someone. It is a force of nature. <br/> <br /> ~ Ana <br/> </p>
            <p className="text"> Love is a four letter word that describes your passion for something <br/> <br /> ~ Raul <br/> </p>
            <p className="text">Loser <br/> On <br/> Venus <br/> Emotions <br/> <br /> ~ Ivan</p>
            <p className="text">The Shell That Finally Broke Open <br/> You meet thousands of people and none of them really get you. Then you meet one person and your life changes forever.<br/> <br /> ~ Alexa</p>
            <p className="text">White chocolate bar <br/> Too much is not good for you <br/> Sweet cotton candy <br/> <br /> ~ Fatima, Gisele</p>
            <p className="text">Flowers and plants, life <br/> is fear and happiness, stress <br/> is relieved by dogs. <br/> <br /> ~ Ashley, Tito </p>
            <p className="text">Rejoice <br/> <br/> It was when I was lil, I can’t remember the day <br/> now I love it so much, I get carried away <br/> the day I chose to dance and change my life. <br/> Now when I speak, ‘bout it, they call me a lowlife <br/> but it’s a choice I made <br/> instead of wasting time at an arcade. <br/> Now it’s something I love <br/> but I also got a brown belt and a pair of boxing gloves <br/> it all started with a motivating choice. <br/> Now every time I put on those shoes, baggy pants, <br/> long shirt, and snapback and step on the floor <br/> I rejoice. <br/> <br /> ~ Arelid </p>
            <p className="text">Why Should I Hide Inside My Shell? <br/> <br/> Why should I hide inside my shell? <br/> If I know I’m beautiful just being myself <br/> There’s no need to imitate those around me <br/> If I am relentless, no one can stop me <br/> Am I weird in our society? <br/> Just by giving more attention to people’s personalities <br/> Maybe it does make me different, but being different also makes me unique <br/> Knowing myself like this really makes me believe <br/> Choosing who to be, the life I should live <br/> Marriage to me is synonymous with team, and my team works together <br/> We are supposed to help each other and with each other, grow even better. <br/> <br /> ~ Catherine </p>
            <div className="courseButtonContainer">
                <a href="/course1"><button >Course 1</button></a>
                <a href="/course3"><button >Next</button></a>
            </div>
        </div>
    )
}

export default Course2Container