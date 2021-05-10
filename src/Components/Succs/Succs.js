import React, { useState, useEffect } from 'react';
import './Succs.scss';
import axios from 'axios';
import SuccsList from './SuccsList';
import Nav from '../Nav/Nav';

const Succs = () => {
  const [succs, setSuccs] = useState([]);

  useEffect(() => {
    getSuccs();
  }, []);

  const getSuccs = () => {
    axios.get(`/api/succs`).then((res) => setSuccs(res.data));
  };

  const mappedSuccs = succs.map((element) => {
    return (
      <SuccsList
        succsListing={element}
        key={element.id}
        name={element.name}
        price={element.price}
        image={element.img}
      />
    );
  });
  return (
    <div>
      <Nav />
      <h2>Succulents</h2>
      <div className="mapped-succs-container">{mappedSuccs}</div>
    </div>
  );
};
// class Succs extends Component {
//   constructor() {
//     super();
//     this.state = {
//       succs: [],
//     };
//   }

//   componentDidMount() {
//     this.getSuccs();
//   }

//   getSuccs = () => {
//     axios
//       .get(`/api/succs`)
//       .then((res) => {
//         this.setState({
//           succs: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     const mappedSuccs = this.state.succs.map((element) => {
//       return (
//         <SuccsList
//           succsListing={element}
//           key={element.id}
//           name={element.name}
//           price={element.price}
//           image={element.img}
//         />
//       );
//     });

//     return (
//       <div>
//         <Nav />
//         <h2>Succulents</h2>
//         <div className="mapped-succs-container">{mappedSuccs}</div>
//       </div>
//     );
//   }
// }

export default Succs;
