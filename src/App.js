import Login from './components/Signup_Login/Login.js';
import Signup from './components/Signup_Login/Signup.js';
import { useAuth } from './components/context/AuthProvider.js';
import Left from './components/home/LeftPart/Left.js'
import Right from './components/home/RightPart/Right.js'


function App() {
  const [authUser,setAuthUser] = useAuth()
  console.log(authUser);
  return (
  
    
    // <div className='flex h-screen'>
    //    <Left/>
    //    <Right/>
     <Signup/>
    // </div>
   
  );
}

export default App;
 