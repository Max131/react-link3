import React, {useState} from 'react';
import Icons from './Icons';

function Link({name, url}, index){
  const [isHover, setIsHover] = useState(false);

  return(
    <li
      className={`notification mb-2 ${isHover && ('is-link')}`}
      onMouseEnter={() => setIsHover(true)} 
      onMouseLeave={() => setIsHover(false)} 
      key={index}
    >
      <a href={url} className="has-text-weight-semibold is-block pl-6" target="_balnk" rel="noopener">
        <span className="icon-text">
          <span className="icon">
            {Icons[name]||Icons['info']}
          </span>
          <span className="is-capitalized">{name}</span>
        </span>
      </a>
    </li>
  );
}

export default function Links({data}){
  return(
    <div>
      <ul>
        {data.map((item, index) => Link(item, index))}
      </ul>
    </div>
  );
}
