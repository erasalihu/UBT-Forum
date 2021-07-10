import React, { useContext, useEffect, useState } from 'react';
// import "../src/HomePage.css"

import {Home,Arkitektur, CSE} from './Subjects/Subjects'
import {Link, Route}  from "react-router-dom";
import UbtLog from '../Shared/Images/UbtLogo.png'
import { Icon, InlineIcon } from '@iconify/react';

import likeIcon from '@iconify-icons/topcoat/like';
import starFill from '@iconify-icons/bi/star-fill';
import OnlineMembers from './OnlineMembers'
import Chat from "./Chat";
import "./HomePage.css"
import { UserContext } from '../Shared/hooks/UserContext';
import getUser from "../UserProfile/UerInfoCrud"
import EmptyPage from '../Shared/Components/EmptyPage';
function HomePage(){
   const {user,setUser} = useContext(UserContext)
   const [data,setData]=useState({username:"",likes:"",reputation:"",dateOfJoining:"",conntact:"",gjenerata:"",posts:"",threads:"",warningLevel:"" });
  const [busy,setbusy]=useState(false);
   
   useEffect(async()=>{
      if(user!=null && user!==""){
         console.log(user)
      const response= await getUser(user.nameid)
      setData(await response.data);  
     setbusy(true);
   }
   },[user])

   if (window?.location.pathname=== `/`)
  require(`../HomePage/HomePage.css`)

return(

 <EmptyPage secondfeed={   <div className="secondFeed">
 {busy?(<div className="userstats">
    <div className="ContentBox">
       <div className="ContentBoxHeader">
          <h3>Welcome Back {user.name} </h3>
       </div>
       <div className="ContentBoxBody">
          <ul>
             <li>
                <a>
                   <span>
                      <InlineIcon icon={likeIcon} />
                   </span>
                   &nbsp;&nbsp;&nbsp;Likes <span>{data.likes}</span>
                </a>
             </li>
             <li>
                <a>
                   <span>
                      <InlineIcon icon={starFill} />
                   </span>
                   &nbsp;&nbsp;&nbsp;Reputation <span>{data.reputation}</span>
                </a>
             </li>
             <li>
                <a>
                   <span>
                      <InlineIcon icon={likeIcon} />
                   </span>
                   &nbsp;&nbsp;&nbsp;Likes <span>{data.likes}</span>
                </a>
             </li>
             <li>
                <a>
                   <span>
                      <InlineIcon icon={likeIcon} />
                   </span>
                   &nbsp;&nbsp;&nbsp;Likes <span>{data.likes}</span>
                </a>
             </li>
          </ul>
       </div>
    </div>
 </div>):(null)}
 <div className="announcments">
    <div className="ContentBoxHeader">
       <h3>Announcements </h3>
    </div>
    <div className="ContentBoxBody">
       <ul>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
       </ul>
    </div>
 </div>
 <div className="LatestActivities">
    <div className="ContentBoxHeader">
       <h3>LatestActivities </h3>
    </div>
    <div className="ContentBoxBody">
       <ul>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
       </ul>
    </div>
 </div>
 <div className="LastTopics">
    <div className="ContentBoxHeader">
       <h3>LastTopics </h3>
    </div>
    <div className="ContentBoxBody">
       <ul>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
          <li>
             <p><span>Icon</span>&nbsp;&nbsp;&nbsp;Title Goes here <span>5</span></p>
             <p>By Jason, 2 hours ago</p>
          </li>
       </ul>
    </div>
 </div>
</div>
}>
   
      
      
         
            <div className="ContentBox">
               <div className="ContentBoxHeader">
                  <h3>Welcome </h3>
               </div>
               <div className="ContentBoxBody">
                  <p>Welcome to UBT. Please read forum rules & keep chatbox English at all times. Remember to run downloaded files in a Virtual Machine or Sandboxie.Do not trust anyone!</p>
               </div>
            </div>
            <div className="ContentBox chat">
               <div className="ContentBoxHeader">
                  <h3>ChatBox </h3>
               </div>
               <div className="ContentBoxBody">
                  <p>Welcome to UBT. Please read forum rules & keep chatbox English at all times. Remember to run downloaded files in a Virtual Machine or Sandboxie.Do not trust anyone!</p>
                  <div className="chatBox">
                      <Chat user={user}/>
                  </div>
               </div>
               <nav className="secondNav">
                  <ul>
                     <li>
                        <Link to="/" >
                        &nbsp;Home</Link>
                     </li>
                  
                     <li>
                        <Link to="/CSE" >
                        &nbsp;CSE</Link>
                     </li>
   
                        
                  </ul>
               </nav>
               <Route exact path="/" component={Home}/>
               <Route exact path="/CSE" component={CSE}/>
            </div>
      
      
      <OnlineMembers/>
   
      </EmptyPage>
 
)
}
export default HomePage;