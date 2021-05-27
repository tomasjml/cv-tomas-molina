const ProfileInfo = ({info}) => {
    return ( 
        <div className="info p-3">  
            <h3 className="text-center">Profile</h3>
            <p>{info}</p>
        </div>
     );
}
 
export default ProfileInfo;