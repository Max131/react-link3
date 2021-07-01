import React from 'react';

export default function UserInfo({user, desc}){
  return(
    <div className="has-text-centered mb-5">
      <p className="title is-3">
        {user}
      </p>
      <p className="subtitle is-6 has-text-grey px-6">
        {desc}
      </p>
    </div>
  );
}