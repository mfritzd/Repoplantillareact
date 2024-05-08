
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppBlog from './components/blog';
import AppTeams from './components/team';
import AppAbout from './components/about';
import AppsFooters from './components/footer';
import AppContact from './components/contact';

import AppWorks from './components/works';


function App() {
  return (
    <div className="App">
   
          <AppHeader/>
          <main>
          <AppHero/>
          <AppBlog/>
          <AppAbout/>
          <AppWorks/>
          <AppContact/>
          <AppsFooters/>

          </main>
        
            
         
          
    </div>
  );
}

export default App;
