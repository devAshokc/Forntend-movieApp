// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const names = ["GsRagul", "Prassana", "Victor", "Ashok", "Sathya"]
  // const user = [
  //   {
  //     name: "Vassan",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj4j7VUgFw1Djx2KOQtqIHnHCPy_lL35Q5Q&usqp=CAU"
  //   },
  //   {
  //     name: "Vishnu",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
  //   },
  //   {
  //     name: "Charlis",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
  //   },
  //   {
  //     name: "Clady",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
  //   },
  //   {
  //     name: "Vivak",
  //     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6K1J-byWbN0Cd1hIAEt0tmhDWyhuJhClmg&usqp=CAU"
  //   }
  // ]
  const list = [
    {
      id: "100",
      name: "RRR",
      poster:
        "https://stat1.bollywoodhungama.in/wp-content/uploads/2019/03/RRR-2022.jpeg",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      id: "101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      id: "102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      id: "103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  return (
    <div className="App">
      {/* <Welcome name="Ashok" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj4j7VUgFw1Djx2KOQtqIHnHCPy_lL35Q5Q&usqp=CAU" />
      <Welcome name="kumar" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU" />
      <Welcome name="Ak" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6K1J-byWbN0Cd1hIAEt0tmhDWyhuJhClmg&usqp=CAU" /> */}
      {/* {
        names.map((n) => <Msg name={n} />)
      }
      {
        user.map((n) => <Welcome name={n.name} pic={n.pic} />)
      } */}
      {
        names.map((n) => <Msg data={n} />)
      }
      <div className="movie-list-container">
        {
          list.map((n) => <Movies movie={n} />)
        }
      </div>

      {/* <Counter /> */}
      {/* <Color /> */}
    </div>
  );
}


function Counter() {
  const [like, setLike] = useState(0)
  const [disLike, setDisLike] = useState(0)
  return <>
    <button onClick={() => { setLike(like + 1) }} >👍{like}</button>
    <button onClick={function () { setDisLike(disLike + 1) }}>👎{disLike}</button>
  </>
}

// function Welcome(props) {
//   return <>
//     <img className="Profile_pic" src={props.pic} alt={props.name}></img>
//     <h1>Hello,{props.name}</h1>
//     <Counter />
//     <Color />

//   </>
// }
// function Color() {
//   const [color, setColor] = useState("")
//   const styles = {
//     background: color,
//     fontSize: "40px",
//     color: "white",
//   }
//   const types = "text"
//   return <>
//     <input style={styles} type={types} placeholder="Enter color" onChange={(event) => setColor(event.target.value)} value={color} />
//   </>
// }
function Movies({ movie }) {
  return <>

    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name}></img>
      <div className="movie-specs">
        <h1 className="movie-name">{movie.name}</h1>
        <h3 className="movie-rating">👌{movie.rating}</h3>
      </div>
      <p className="movie-summary ">{movie.summary}</p>
      <Counter />
    </div>
  </>
}

function Msg(props) {
  return <>
    <h1>Hello! {props.data}🎇✨🎊🎉</h1>
  </>
}
export default App;