// write your CatList component here

import React from 'react';

function CatList(props) {
  return (
    <div>
      {props.catPics.map(pic=> <img src={pic.url} alt="" key={pic.id}/>)}
    </div>
  );
}

export default CatList;