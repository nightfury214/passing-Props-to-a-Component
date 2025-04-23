// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { showNotification } from "./notifications.js";
import Avatar from "./Avatar";
import { getImageUrl } from "./utils";
import { people } from "./data";
import FancyText from "./FancyText";
import InspiratinGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";
import { useState , useContext,useRef , useEffect} from "react";
import { initialTravelPlan } from "./places";
import {Chat, sendMessage} from "./Chat";
import ContactList from "./ContactList";
import { useReducer } from "react";
import { initialState, messengerReducer } from "./messengerReducer";
import Heading from "./Heading";
import Section from "./Section";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskContext, TasksDispatchContext } from "./TasksContext";
import { initialTodos, createTodo } from './todos.js';

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// export default function Profile() {
//   return(
//     <Card >
//       <Avatar
//         size={100}
//         person={{
//           name: "panda",
//           imageId:"aaaa"
//         }}
//       />
//     </Card>
//   );
// }



// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('szV5sdG')}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b> 
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl('YfeOqp2')}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b> 
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b> 
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }


function Item({name, isPacked}) {
  // if(isPacked) return <li className="item"> {name}</li>
  // return <li className="item"> {name}</li>;
  // return(
  //   <li className="item">
  //     {isPacked ? (
  //       <del>
  //         {name + " "}
  //       </del>
  //     ): (
  //       name
  //     )}
  //   </li>
  // );


  return (
    <li className="item">
      {name} {isPacked && ' '}
    </li>
  );
}

// export default function PackingList() {
//   return(
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true}
//           name ="space suit"
//         />
//         <Item
//           isPacked={true}
//           name ="helmet"
//         />
//         <Item
//           isPacked={false}
//           name="photo"
//         />
//       </ul>
//     </section>
//   );
// }


// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];


// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );

//   return <ul>{listItems}</ul>
// }


// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );

//   const listItems = chemists.map(person =>
//     <li>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>
//           {person.name}:
//         </b>
//         {' ' + person.profession + ' '}
//         knwon for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>
// }


// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img 
//         src = {getImageUrl(person)}
//         alt = {person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//         {' ' + person.profession + ' '}
//         knwon for {person.accomplishment}
//       </p>
//     </li>
//   );

//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ui>{listItems}</ui>
//     </article>
//   )
// }



// function Cup({guest}) {
//   return <h2>Tea for guest #{guest}</h2>;
// }

// export default function TeaGathering() {
//   let cups = [];
//   for(let i = 1; i <= 12; i ++) {
//     cups.push(<Cup key={i} guest = {i}/>);
//   }

//   return cups;
// }



// export default function App() {
//   return(
//     <>
//       <FancyText title text="Get Inspored App"/>
//       <InspiratinGenerator>
//         <Copyright  year={2025}/>
//       </InspiratinGenerator>
//     </>
//   );
// }

// export default function Clock({time}) {
//   return(
//     <>
//       <h1>{time}</h1>
//       <input />
//     </>
//   )
// }


// export default function Form() {
//   const [insSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi');

//   if(insSent) {
//     return <h1>Your message is on its way!</h1>
//   }

//   return(
//     <form onSubmit={(e) =>{
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea
//       placeholder="Message"
//       value={message}
//       onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">send</button>
//     </form>
//   );
// }

// function sendMessage(message) {

// }

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>
//         {number}
//       </h1>
//       <button
//           onClick={() => {
//             setNumber(number + 5);
//             setTimeout(() => {
//               alert(number);
//             }, 3000);
//           }}
//         >
//           +5
//         </button>
//     </>
//   )
// }


// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         change to {walk ? 'stop' : 'walk'}
//       </button>
//       <h1 style={{color:walk ? 'derkgreen' : 'darked'}}>
//         {walk ? 'walk' : 'stop'}
//       </h1>
//     </>
//   );
// }


// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = people[index];

//   return (
//     <>
//       <button onClick={handleNextClick}>
//         next
//       </button>
//       <h2>
//         <i>{sculpture.name}</i>by{sculpture.profession}
//       </h2>
//       <h3>
//         <button>({index + 1} of {people.length})</button>
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'show'} details
//       </button>
//       {showMore && <p>{sculpture.accomplishment}</p>}
//       <img 
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }

// export default function RequestTracker() {
//   const [pending, setPending] = useState(0);
//   const [completed, setCompleted] = useState(0);

//   async function handleClick(){
//     setPending(pending + 1);
//     await delay(3000);
//     setPending(pending - 1);
//     setCompleted(completed + 1);

//   }

//   return (
//     <>
//       <h3>
//         pending: {pending}
//       </h3>
//       <h3>
//         completed: {completed}
//       </h3>
//       <button onClick={handleClick}>buy</button>
//     </>
//   );
// }

// function delay(ms) {
//   return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }


// export default function MovingDot() {
//   const [position, setPosition] = useState({x:0, y: 0});

//   return(
//   <div
//     onPointerMove={e => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
      
//   }}
//   style={{
//     position:'relative',
//     width:'100vw',
//     height:'10vh',}}>
//   <div style={{
//     position:'absolute',
//     backgroundColor:'red',
//     borderRadius: '50%',
//     transform: `translate(${position.x}px, ${position.y}px)`,
//     left: -10,
//     top:-10,
//     width:20,
//     height:20,
//   }}/>
//   </div>);
// }


// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: 'panda',
//     lastName: 'Hepworth',
//     email: 'bhepworth@sculpture.com',
//     artwork:{
//       title:'blue nana',
//       city:'hamburg',
//       image:'https://i.imgur.com/'
//     },
//     score: 10,
//   });

//   function handlePlusClick(){
//     person.score ++;
//   }
//   function handleFirstNameChange(e) {
//     setPerson({
//       ...person,
//       firstName: e.target.firstName
//     });
//     // person.firstName = e.target.value;
//   }

//   function handleLastNameChange(e) {
//     setPerson({
//       ...person,
//       lastName: e.target.lastName
//     });
//     // person.lastName = e.target.value;
//   }

//   function handleEmailChange(e) {
//     setPerson({
//       ...person,
//       email:e.target.email
//     })
//     // person.email = e.target.value;
//   }

//   function handleTitleChange(e) {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value
//       }
//     });
//   }

//   function handleCityChange(e) {
//     setPerson({
//       ...person,
//       artwork :{
//         ...person.artwork,
//         city: e.target.value
//       }
//     });
//   }

//   function handleImageChange(e) {
//     setPerson({
//       ...person,
//       artwork:{
//         ...person.artwork,
//         image: e.target.value
//       }
//     });
//   }

//   return(
//     <>
//       <label>
//         score: <b>{person.score}</b>
//         {' '}
//         <button onClick={handlePlusClick}> +1</button>
//       </label>
//       <label>
//         First name:
//         <input value={person.firstName} onChange={handleFirstNameChange}/>
//       </label>
//       <label>
//         Last name:
//         <input value={person.lastName} onChange={handleLastNameChange}/>
//       </label>
//       <label>
//         email:
//         <input value={person.email} onChange={handleEmailChange}/>
//       </label>
//       <label>
//         Title:
//         <input value={person.artwork.title} onChange={handleTitleChange}/>
//       </label>
//       <label>
//         city:
//         <input  value={person.artwork.city} onChange={handleCityChange}/>
//       </label>
//       <label>
//         image:
//         <input value={person.artwork.image} onChange={handleImageChange}/>
//       </label>
//     </>
//   )
// }


// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return(
//     <>
//       <h1>
//         Inspiring sculptors:
//       </h1>
//       <input value={name} onChange={e => setName(e.target.value)}/>
//       <button onClick={() => {
//         // artists.push({
//         //   id: nextId ++,
//         //   name:name,
//         // });
//         setArtists([
//           ...artists,
//           {
//             id:nextId++,
//             name:name
//           }
//         ]);
//       }}>add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}> {artist.name} </li>
//         ))}
//       </ul>
//     </>

//   )
// }

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtists] = useState(initialArtists);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>
//             {artist.name}{' '}
//             <button onClick={() => {
//               setArtists(artists.filter(a => a.id !== artist.id))
//             }}>delete</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   function handleClick() {
//     const insertAt = 1;
//     const nextArtists = [
//       ...artists.slice(0, insertAt),
//       { id: nextId++, name: name },
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         Insert
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];


// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(initialList);

//   function handleToggleleMyList(artworkId, nextSeen) {
//     setMyList(myList.map(artwork => {
//       if(artwork.id === artworkId) {
//         return{...artwork, seen: nextSeen}
//       } else return artwork;
//     }));
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     setYourList(yourList.map(artwork => {
//       if(artwork.id === artworkId) {
//         return{...artwork, seen:nextSeen};
//       } else return artwork;
//     }));
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList 
//         artworks={myList}
//         onToggle={handleToggleleMyList}
//       />
//       <h2>Your list of art to see:</h2>
//       <ItemList 
//         artworks={yourList}
//         onToggle={handleToggleYourList}
//       />
//     </>
//   );
// }

// function ItemList({artworks, onToggle}) {
//   return(
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input 
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                 e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if(status === 'success') {
//     return <h1>That's right</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch(err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//     <h2>city quiz</h2>
//     <p>
//       In which city is there a billboard that turns ari
//     </p>
//     <form onSubmit={handleSubmit}>
//       <textarea 
//         value={answer}
//         onChange={handleTextareaChange}
//         disabled={status === 'submitting'}
//       />
//     </form>
//     <br/>
//     <button disabled={answer.length === 0|| status === 'submitting'}>Submit</button>
//     {error !== null && <p className="Error">{error.message}</p>}
//     </>
//   )
// }

// function submitForm(answer) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if(shouldError) {
//         reject(new Error('Good guess but a wrong answer'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }


// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   // const [isSending, setIsSending] = useState(false);
//   // const [isSent, setIsSent] = useState(false);
//   const [status, setStatus] = useState('typing');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     // setIsSending(true);
//     setStatus('sending');
//     await sendMessage(text);
//     // setIsSending(false);
//     // setIsSent(true);
//     setStatus('sent');
//   }

//   const isSending = status === 'sending';
//   const isSent = status === 'sent';


//   if(isSent) {
//     return <h1>{text}:send Message!!!!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at the prancing pony???</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e=>setText(e.target.value)}
//       />
//       <br/>
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         send
//       </button>
//       {isSending && <p>sending........</p>}
//     </form>
//   )
// }

// function sendMessage(text) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }


// export default function Form(){
//   const [firtstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   function handleFirstNameChange(e)  {
//     setFirstName(e.target.value);
//     setFullName(e.target.value + ' ' + lastName);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//     setFullName(firtstName + ' ' + e.target.value);
//   }

//   return(
//     <>
//       <h2>let's check you in</h2>
//       <label>
//         first name:{ ' '}
//         <input 
//           value={firtstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         last name: {' '}
//         <input 
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         your ticket will issued to: <b>{fullName}</b>
//       </p>
//     </>
//   )
// }


// function PlaceTree({place}) {
//   const childPlaces = place.childPlaces || [];

//   return(
//     <li>
//       {place.title}
//       {childPlaces.length > 0 && (
//         <ol>
//           {childPlaces.map(place => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const planets = plan.childPlaces;
//   return (
//     <>
//       <h2>place to visit</h2>
//       <ol>
//         {planets.map(place => (
//           <PlaceTree key={place.id} place={place} />
//         ))}
//       </ol>
//     </>
//   )
// }


// function Panel({title, children}) {
//   const [isActive, setIsActive] = useState(false);
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ):(
//         <button onClick={() => setIsActive(true)}>
//           show
//         </button>
//       )}
//     </section>
//   );
// }

// export default function Accordion() {
//   return(
//     <>
//       <h2>Almaty</h2>
//       <Panel title="About">
//         with a population of about 2 million, Almaty is 
//       </Panel>
//       <Panel title="etymology">
//         the name comes from
//       </Panel>
//     </>
//   );
// }

// export default function Accordion(){
//   return(
//     <>
//       <h2>
//         almaty
//       </h2>
//       <Panel title="about" isActive={true}>
//         with a population of about 2million
//       </Panel>
//       <Panel title="Etymology" isActive={true}>
//         the name comes from
//       </Panel>
//     </>
//   );
// }

// function Panel({title, children, isActive}) {
//   return(
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ):(
//         <button onClick={() => setIsActive(true)}></button>
//       )}
//     </section>
//   )
// }

// export default function SyncedInputs() {
//   return(
//     <>
//       <Input label = "first input"/>
//       <Input label = "second input"/>
//     </>
//   );
// }

// function Input({label}) {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <label>
//       {label}{' '}
//       <input value={text} onChange={handleChange}/>
//     </label>
//   )
// }

// export default function App(){
//   // const counter = <Counter />
//   const [showB, setShowB] = useState(true);

//   return(
//     <div>
//       {/* {counter}
//       {counter} */}
//       <Counter />
//       {showB && <Counter />}
//       <label>
//         <input 
//           type = "checkbox"
//           checked={showB}
//           onClick={e => {setShowB(e.target.checked)
//           }}
//         />render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter(){
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if(hover) className += 'hover';

//   return(
//     <div
//     className={className}
//     onPointerEnter={() => setHover(true)}
//     onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         add one
//       </button>
//     </div>
//   )
// }

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return(
//     <div>
//       {isFancy ? (
//         <Counter isFancy={true} />
//       ) : (
//         <Counter isFancy={true} />
//       )}

//       <label>
//         <input 
//         type="checkbox"
//         checked={isFancy}
//         onChange={e=>{
//           setIsFancy(e.target.checked)
//         }}
//         />
//         use fancy styling
//       </label>
//     </div>
//   )
// }

// function Counter({isFancy}) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if(hover) {
//     className += 'hover';
//   }
//   if(isFancy) {
//     className += 'fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>add one</button>
//     </div>
//   )
// }

// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);

//   return(
//     <div>
//       {isPaused ? (
//         <p>see you later!!</p>
//       ) : (<Counter />)}
//       <label>
//         <input 
//           type="checkbox"
//           checked={isPaused}
//           onChange={e => {
//             setIsPaused(e.target.checked)
//           }}
//         />
//         Take a break
//       </label>
//     </div>
//   )
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if(hover) className += 'hover';

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button
//         onClick={() => setScore(score + 1)}
//       >
//         add one
//       </button>
//     </div>
//   );
// }

// export default function Messenger() {
//   const [to, setTo] = useState(contacts[0]);
//   return (
//     <div>
//       <ContactList 
//         contacts={contacts}
//         selectedContact={to}
//         onSelect={contact => setTo(contact)}
//       />
//       <Chat contact={to}/>
//     </div>
//   );
// }

// const contacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];


// export default function Messenger() {
//   const [state, dispatch] = useReducer(messengerReducer, initialState);
//   const message = state.message;
//   const contact = contacts.find((c) => c.id === state.selectedId);

//   return (
//     <div>
//       <ContactList 
//         contacts={contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat 
//         key={contact.id}
//         message={message}
//         contact={contact}
//         dispatch={dispatch}
//       />
//     </div>
//   )
// }

// const contacts =[{id: 0, name: 'Taylor', email: 'taylor@mail.com'},
//   {id: 1, name: 'Alice', email: 'alice@mail.com'},
//   {id: 2, name: 'Bob', email: 'bob@mail.com'},];

// export default function Page() {
//   return(
//     <Section>
//       <Heading level={1}>Title</Heading>
//       <Section>
//         <Heading level={2}>Heading</Heading>
//         <Heading level={2}>Heading</Heading>
//         <Heading level={2}>Heading</Heading>
//         <Section>
//           <Heading level={3}>Sub-heading</Heading>
//           <Heading level={3}>Sub-heading</Heading>
//           <Heading level={3}>Sub-heading</Heading>
//           <Section>
//             <Heading level={4}>Sub-sub-heading</Heading>
//             <Heading level={4}>Sub-sub-heading</Heading>
//             <Heading level={4}>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   )
// }


// export default function App() {
//   const [isLarge, setIsLarge] = useState(false);
//   const imageSize = isLarge ? 150 : 100;
//   return (
//     <>
//       <label>
//         <input 
//           type = "checkbox"
//           checked = {isLarge}
//           onChange={e => {
//             setIsLarge(e.target.checked);
//           }}
//         />
//         Use large images
//       </label>
//       <hr />
//       <List imageSize = {imageSize}/>
//     </>
//   )
// }

// function List({imageSize}) {
//   const listItems = people.map(p =>
//     <li key={p.id}>
//       <Place place={p}
//       imageSize={imageSize}
//       />
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// function Place({place, imageSize}) {
//   return(
//     <>
//       <PlaceImage 
//         place={place}
//       />
//     </>
//   )
// }


// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   function handleAddTask(text) {
//     dispatch({
//       type: 'added',
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: 'changed',
//       task: task
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       type: 'deleted',
//       id: taskId
//     });
//   }

//   return (
//     <>
//       <TaskContext.Provider value={tasks}>
//         <TasksDispatchContext.Provider value={dispatch}>
//         <h1>Day off in Kyoto</h1>
//           <AddTask
//             onAddTask={handleAddTask}
//           />
//           <TaskList
//             tasks={tasks}
//             onChangeTask={handleChangeTask}
//             onDeleteTask={handleDeleteTask}
//           />
//         </TasksDispatchContext.Provider>
//         </TaskContext.Provider>
      
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//       return [...tasks, {
//         id: action.id,
//         text: action.text,
//         done: false
//       }];
//     }
//     case 'changed': {
//       return tasks.map(t => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case 'deleted': {
//       return tasks.filter(t => t.id !== action.id);
//     }
//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState(null);
//   const [now, setNow] = useState(null);
//   const intervalRef = useRef(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     clearInterval(intervalRef.current);
//   }

//   let secondsPassed = 0;
//   if(startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return(
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         start
//       </button>
//       <button onClick={handleStop}>
//         stop
//       </button>
//     </>
//   );
// }


// export default function Counter() {
//   let countRef = useRef(0);

//   function handleClick() {
//     countRef.current = countRef.current + 1;
//   }

//   return(
//     <button onClick={handleClick}>
//       {countRef.current}
//     </button>
//   )
// }


// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// function VideoPlayer({src, insPlaying}) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if(insPlaying) {
//       console.log('calling play()');
//       ref.current.play();
//     }
//     else{
//       console.log('calling pause()');
//       ref.current.pause();
//     }
//   }, [insPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');

//   return(
//     <>
//       <input value={text} onChange={e=> setText(e.target.value)}/>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'pause':'Play'}
//       </button>
//     </>
//   );
// }



// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [showActive, setShowActive] = useState(false);
//   const [activeTodos, setActiveTodos] = useState([]);
//   const [visibleTodos, setVisibleTodos] = useState([]);
//   const [footer, setFooter] = useState(null);

//   useEffect(() => {
//     setActiveTodos(todos.filter(todo => !todo.completed));
//   }, [todos]);

//   useEffect(() => {
//     setVisibleTodos(showActive ? activeTodos : todos);
//   }, [showActive, todos, activeTodos]);

//   useEffect(() => {
//     setFooter(
//       <footer>
//         {activeTodos.length} todos left
//       </footer>
//     );
//   }, [activeTodos]);

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={showActive}
//           onChange={e => setShowActive(e.target.checked)}
//         />
//         Show only active todos
//       </label>
//       <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
//       <ul>
//         {visibleTodos.map(todo => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//       {footer}
//     </>
//   );
// }

// function NewTodo({ onAdd }) {
//   const [text, setText] = useState('');

//   function handleAddClick() {
//     setText('');
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={handleAddClick}>
//         Add
//       </button>
//     </>
//   );
// }


function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const [message, setMessage] = useState('');


  useEffect(() => {
    const connection = Chat(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]);

  function handelSendClick() {
    sendMessage(message);
  }

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handelSendClick}>send</button>
      
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
    <button onClick={() => setShow(!show)}>
      {show ? 'close chat' : 'open chat'}
    </button>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <input 
        type="checkbox"
        checked={isDark}
        onChange={e => setIsDark(e.target.checked)}
      />
      <hr />
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} theme={isDark ? 'dark' : 'light'}/>}
    </>
  );
}

