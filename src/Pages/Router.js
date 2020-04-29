import React,{useContext} from 'react';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom'
import Home from './Home'
import LogIn from './LogIn'
//import {auth} from '../config'
import AuthContext, { AuthProvider }  from '../AuthContext';


// const Authenticated = ()=>(
//     <BrowserRouter>
//     <div>
//         <Route exact path ='/' component={LogIn}/>
//     </div>
//     </BrowserRouter>
// )

// const UnAuthenticated = ()=>(
//     <BrowserRouter>
//     <div>
//         <Route exact path ='/' component={LogIn}/>
//         <Route exact path ='/home' component={Home}/>
//     </div>
//     </BrowserRouter>
// )

    // class Router extends Component {
    // constructor(props){
    //     super(props)
    //    this.state = {
    //        user: null
    //       }
    // }
    // componentDidMount(){
    //     this.listener= auth.onAuthStateChanged(
    //         user => {
    //          user?   this.setState({user}): this.setState({user:null})
    //         }
    //     )
    // }
    // componentWillUnmount(){
    //     this.listener();
    // }
//     render() { 
//         return ( 
//            <div>
//                {this.state.user ? <Authenticated/> :<UnAuthenticated/>}
//            </div>
//          )
//         }
// }
  const CustomRoutes = () => {

    const {user} = useContext(AuthContext)
      return (  
          <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/'
              render={()=> (user? <Home/>
              :<Redirect to = '/login'/>
              )}
              />
              <Route exact path='/login' component={ LogIn}/>
            </Switch>
            
          </div>
          </BrowserRouter>
      );
  }
   
const Routes = () => {
    return (
        <AuthProvider>
            <CustomRoutes/>
        </AuthProvider>
      );
}
 
export default Routes;