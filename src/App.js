import React from 'react'
import Course1Container from './container/course1/Course1Container'
import Course2Container from './container/course2/Course2Container'
import Course3Container from './container/course3/Course3Container'
import Course4Container from './container/course4/Course4Container'
import './App.css'
import TimeTravelMartLogo from './assets/timetravelmart.svg'
import {Switch, Route} from "react-router-dom";

const course1=[
  "A haiku follows the syllable formatting 5, 7, 5. Write a haiku about your first love.",
  "An acrostic poem uses the first letter of a word to create new ideas. Write an acrostic poem about what love means to you.",
  "Sharing food can be an act of love.  What dish would you like to share, and with whom?",
  "How would your pet or favorite animal describe you?",
  "You have all the time in the world, what would you love to do?",
  "We’re all a little different.  We’re all a little weird.  Who do you know and love for their weirdness and why?",
  "You are experiencing the most amazing art you’ve ever encountered.  What is it like and how does it make you feel?",
  "A new form of art is created, what is it?",
  "Rearrange the lyrics to your favorite song.",
  "Write a poem about the worst food you’ve ever tasted.",
  "Complete the sentence: Home is",
  "Future ‘you’ has returned with an important message.  What is it?",
  "Pusheen is the cleverest cat in the world. Draw a picture with a thought bubble. What is she thinking?",
  "If you could plant something you don’t like and have it grow into something you do like, what would that be?",
  "Describe five things about your neighborhood.",
  "In the space provided create a map of your dreams.",
  "Pick three members of your family.  How are you alike?  How are you different?",
  "Your words have power. Invent the powerful word you need.  What does it mean?"
]

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/course1">
          <div className="imgContainer">
            <img className='ttmLogo' src={TimeTravelMartLogo} />
          </div>
          <Course1Container questions={course1}/>
        </Route>
        <Route exact path="/course2">
          <div className="imgContainer">
            <img className='ttmLogo' src={TimeTravelMartLogo} />
          </div>
          <Course2Container />
        </Route>
        <Route exact path="/course3">
          <div className="imgContainer">
            <img className='ttmLogo' src={TimeTravelMartLogo} />
          </div>
          <Course3Container />
        </Route>
        <Route exact path="/course4">
          <div className="imgContainer">
            <img className='ttmLogo' src={TimeTravelMartLogo} />
          </div>
          <Course4Container />
        </Route>
      </Switch>
    </div>
  )
}

export default App
