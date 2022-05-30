import "./App.css";
import "./grid.css";
import "./Animation.css";
import { useState, createRef } from "react";

var familyData = require("./Assests/Family.json");
var firstMember = Object.keys(familyData)[0];
var panelRef = createRef();

function Button(props) {
  if (props.person[props.relation] != null) {
    return (
      <div className="buttonCon" id={props.relation+'Con'}>
      <div
        className="button"
        id={props.relation}
        onClick={() => {
          props.setFadeClass("fade forwardAnim");
          setTimeout(() => {
            props.setPerson(props.relative);
          }, 500);
          setTimeout(() => {
            props.setFadeClass("fade backwardAnim");
          }, 500);
          props.setFadeClass("noFade");
        }}
      >
        {props.relation}
      </div>
      </div>
    );
  } 
  else {
    return (
      <div className="buttonCon" id={props.relation+'Con'}>
      <div className="nonExisteningButton" id={props.relation}>
        {props.relation}
      </div>
      </div>
    );
  }
}

function ListButton(props) {
  if (props.person[props.relation] != null) {
    return (
      <div className="buttonCon" id={props.relation+'Con'}>
      <div className="button" id={props.relation}>
        {props.relation}
       <div className="dropDown">
          {props.state.map((value) => {
            return (
              <div
                className="dropped"
                key={value}
                onClick={() => {
                  props.setFadeClass("fade forwardAnim");
                  setTimeout(() => {
                    props.setPerson(familyData[value]);
                  }, 500);
                  setTimeout(() => {
                    props.setFadeClass("fade backwardAnim");
                  }, 500);
                  props.setFadeClass("noFade");
                }}
              >
                {value}
              </div>
            ); 
          })}
        </div>
      </div>
      </div>
    );
  } else {
    return (
      <div className="buttonCon" id={props.relation+'Con'}>
      <div className="nonExisteningButton" id={props.relation}>
        {props.relation}
      </div></div>
    );
  }
}

function Navigator(props) {
  var [person, setPerson] = useState(familyData[firstMember]);
  var [fadeClass, setFadeClass] = useState("noFade");
  return (
    <div className="main">
      <div className="title" onClick={() => {
        setTimeout(() => {
          props.setClass("fade backwardAnim");
          props.setHomePage(true);
        }, 500);
        props.setClass("noFade");

        }}>Family Tree</div>
      <div className={"panel " + fadeClass} ref={panelRef}>
        <div className="topRow">
          <Button
            relation="Father"
            person={person}
            setPerson={setPerson}
            setFadeClass={setFadeClass}
            relative={familyData[person.Father]}
          />
          <Button
            relation="Mother"
            person={person}
            setPerson={setPerson}
            setFadeClass={setFadeClass}
            relative={familyData[person.Mother]}
          />
        </div>
        {person.Image ? (
          <img
            src={require("./Assests/Images/" + person.ImagePath)}
            alt={person.Name}
          />
        ) : (
          <img
            src={require("./Assests/No Image.jpg")}
            alt={person.Name}
          />
        )}

        <h1>{person.Name}</h1>
        <p>{person.About}</p>

        <div className="bottomRow">
          <Button
            relation="Spouse"
            person={person}
            setPerson={setPerson}
            setFadeClass={setFadeClass}
            relative={familyData[person.Spouse]}
          />
          <ListButton
            relation="Children"
            person={person}
            state={person.Children}
            setPerson={setPerson}
            setFadeClass={setFadeClass}
            relative={familyData[person.Children]}
          />
          <ListButton
            relation="Sibling"
            person={person}
            state={person.Sibling}
            setPerson={setPerson}
            setFadeClass={setFadeClass}
            relative={familyData[person.Sibling]}
          />
        </div>
      </div>
    </div>
  );
}

function HomePage(props) {
  return (
  <div className="homePage">
      <div className="smallerHeading">Explore the</div>
      <div className="titleHomePage">Family Tree</div>
      <div className="startButton borderButton" onClick={() => { 
          setTimeout(() => {
            props.setClass("fade backwardAnim");
            props.setHomePage(false);
          }, 500);
          props.setClass("noFade");

        }}>Begin Exploring!</div>
  </div>
  );
}


function App() {
  var [isHomePage, setHomePage] = useState(true);
  var [Class, setClass] = useState("noFade");

  return (
    <div class={Class}>
      {
        isHomePage
        ? <HomePage setHomePage={setHomePage} setClass={setClass}/>
        : <Navigator setHomePage={setHomePage} setClass={setClass}/>
      }
    </div>
  );
}

export default App;
