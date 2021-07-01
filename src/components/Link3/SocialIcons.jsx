import React, {useState} from 'react';
import Icons from './Icons';

function SocialIcon({name, url}, index){
  const [iconColor, setIconColor] = useState(false);
  return(
    <li className="" key={index} >
      <a href={url} className="has-text-weight-semibold is-block" target="_balnk" rel="noopener">
        <span className="icon">
          <span 
            className={`icon ${iconColor? ' has-text-link': ' has-text-grey'}`} 
            onMouseEnter={()=> setIconColor(true)}  
            onMouseLeave={()=> setIconColor(false)} 
          >
            {Icons[name]||Icons['info']}
          </span>
        </span>
      </a>
    </li>
  );
}

export default function SocialIcons({data}){
  return(
    <div>
      <hr />
      <ul className="is-flex is-justify-content-space-evenly">
        {data.map((item, index) => SocialIcon(item, index))}
      </ul>
    </div>
  );
}
