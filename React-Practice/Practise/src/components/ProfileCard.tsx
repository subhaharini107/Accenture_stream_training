
interface ProfileProps{
        name:string;
        role:string;
        age:number;
        city:string;
        status:boolean;
    }

function ProfileCard(props:ProfileProps) {
  return (
    <div className="card">
      <div className="cards">
        <p>{props.name}</p>
         <p>{props.role}</p>
         <p>Age : {props.age}</p>
         <p>City: {props.city}</p>
         <p>Status : {props.status? "Working":"Looking for Job"}</p>
         </div>
    </div>
  )
}

export default ProfileCard