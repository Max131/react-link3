import Avatar from './Avatar';
import Links from './Links';
import UserInfo from './UserInfo';

export default function Link3({userData}){
  return(
    <div className="container columns is-mobile is-centered">
      <div className="column box has-background-light is-6-tablet is-4-desktop">
        <Avatar image={userData.avatar} alt={userData.user} />
        <UserInfo user={userData.user} desc={userData.desc} />
        <Links data={userData.social} />
      </div>
    </div>    
  );
}