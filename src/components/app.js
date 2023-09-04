import React from 'react';
import StarRating from './star-rating';


export default function App() {
  return <StarRating
    style={{ backgroundColor: "lightblue" }}
    onDoubleClick={e => alert("double click")}
  />;
}