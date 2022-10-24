import React, { useEffect, useState } from 'react'

const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
        
            <div className="container">
               
               {
                   users.map((curElem) => {
                       return (

                           <div className="card_item" key={curElem.id}>
                               <div className="card_inner">
                               <div class="flip-box">
                                    <div class="flip-box-inner">
                                    <div class="flip-box-front">
                                    <img src={curElem.avatar} alt="" />
                                   <div className="userName">{curElem.jobTitle}</div>
                                   <div className="userUrl">{curElem.Bio}</div>
                                   {/* <div className="detail-box">

                                       <div className="gitDetail"><span>Articles</span>23</div>
                                       <div className="gitDetail"><span>Following</span>45</div>
                                       <div className="gitDetail"><span>Followers</span>11</div>
                                   </div> */}
                                   
                                     </div>
                                    <div class="flip-box-back">
                                    <div class="w3-panel w3-topbar w3-bottombar w3-border-red w3-pale-red">
                                    <h2>{curElem.profile.username}</h2>
                                            </div>
                                    
    
                                    <h3>FirstName:{curElem.profile.firstName}</h3>
                                    <h3>LastName:{curElem.profile.lastName}</h3>
                                    <div class="w3-panel w3-border-top w3-border-bottom">
                                    <h4 className='email'>Email:{curElem.profile.email}</h4>
                                        </div>
                                    
                                    </div>
                                    </div>
                                    </div>
                                   
                               </div>

                           </div>
                       )
                   })
               }

           </div>  
   
                        


    )
}

export default Index;

