import Avatar from './Avatar';
import UserInfo from './UserInfo';
import Links from './Links';
import SocialIcons from './SocialIcons';

export default function Link3({userData}){
  return(
    <div className="container columns is-mobile is-centered" id={userData.id} >
      <div className="column box has-background-light is-6-tablet is-4-desktop">
        <Avatar image={userData.avatar} alt={userData.user} />
        <UserInfo user={userData.user} desc={userData.desc} />
        <Links data={userData.links} />
        <SocialIcons data={userData.social} />
      </div>
    </div>    
  );
}