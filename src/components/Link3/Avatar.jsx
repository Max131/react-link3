import React from 'react';

 export default function Avatar({image, alt}){
  return(
    <div className="has-text-centered my-5">
      <figure className="image is-96x96 is-inline-block">
        <img className="is-rounded" src={`${image}`} alt={`${alt} avatar`} />
      </figure>
    </div>
  );
}