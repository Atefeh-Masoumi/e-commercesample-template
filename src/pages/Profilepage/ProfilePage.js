

import "./profilePage.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../Providers/AuthProvider";
const ProfilePage = ({history}) => {
    const userInfo = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };
    return ( 

       <>
       
        <div className="">
            <h1>Your Profile</h1>
            < div>
                <p className="welcomeMsg"> Welcome {userInfo.name}</p>
                <p className="emailP">Email : {userInfo.email}</p>
                <p>{userInfo.isAdmin ? "You are an admin" : "You are not an admin"}</p>
            </div>
            {userInfo ? (
            <button className="logoutBtn" onClick={logoutHandler}>
                Logout
            </button>
      ) : null}
    </div>
          <div className="profileContainer d-flex flex-row ">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="info-section d-flex flex-column justify-content-center">
                <div className="user-info ">
                 <div className="d-flex justify-content-center align-items-center">
                  <FaRegUserCircle className="usericon" />
                  <p className="user-name fs-5 p-2 pt-4">Dear {userInfo.name} </p>
                 </div>
                </div>
                <div className="">
                  orders
                </div>
                <div className="">
                  User information
                </div>
                <div className="">
                  Logout
                </div>

              </div>

            </div>
            <div className="col-md-8">
              <div className="">
                <div className="">
                  My shopping List
                </div>
              </div>

            </div>
          </div>
       </>
     );
}
 
export default ProfilePage;