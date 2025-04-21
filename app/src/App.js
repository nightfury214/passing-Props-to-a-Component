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

export default function PackingList() {
  return(
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true}
          name ="space suit"
        />
        <Item
          isPacked={true}
          name ="helmet"
        />
        <Item
          isPacked={false}
          name="photo"
        />
      </ul>
    </section>
  );
}