import React,{Suspense,useContext} from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import EditStudent from '../src/pages/EditStudent';
import { ThemeContext } from './context/Theme/themeContext';

import AuthContextProvider from './context/Auth/autContext';
import StudentsContextProvider from './context/Students/studentsContext';
const AddStudent = React.lazy(()=>import('../src/pages/AddStudent')) ;

const App=() =>{
 const themeContext=useContext(ThemeContext);
 const{lightTheme,light,dark}=themeContext;
 const theme=lightTheme?light:dark;
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <StudentsContextProvider>
      
    <div className="App" style={{background:theme.bg,color:theme.syntax}}> 
        <Toolbar />
        
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add-student" exact render={()=>(
              <Suspense fallback={<p>...loading</p>}>
                <AddStudent />
              </Suspense>)} 
            />
            <Route path="/student/:studentid" exact component={EditStudent} />
            <Route render={()=><h1>not Found</h1>} />
          </Switch>
          
          
        
        
    </div>
    </StudentsContextProvider>
    </AuthContextProvider>
   
    
      
    </BrowserRouter>
    
  );
}


export default App;
