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

import Avatar from "./Avatar";
import { getImageUrl } from "./utils";
import { people } from "./data";
import FancyText from "./FancyText";
import InspiratinGenerator from "./InspirationGenerator";
import Copyright from "./Copyright";
import { useState } from "react";

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

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if(status === 'success') {
    return <h1>That's right</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch(err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
    <h2>city quiz</h2>
    <p>
      In which city is there a billboard that turns ari
    </p>
    <form onSubmit={handleSubmit}>
      <textarea 
        value={answer}
        onChange={handleTextareaChange}
        disabled={status === 'submitting'}
      />
    </form>
    <br/>
    <button disabled={answer.length === 0|| status === 'submitting'}>Submit</button>
    {error !== null && <p className="Error">{error.message}</p>}
    </>
  )
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if(shouldError) {
        reject(new Error('Good guess but a wrong answer'));
      } else {
        resolve();
      }
    }, 1500);
  });
}
