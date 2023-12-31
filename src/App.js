import Header from './Menu/Header';
import './App.css';
import Routing from './Menu/Return  Segments/Routing';
import Footing from './Footer/Footing';
import { useEffect, useState } from 'react';
import { AppMainProvider } from './Custom Hooks/AppMainContext';
import MainModal from './ModalWindows/MainModal';


function App() {

  const [data, setData] = useState(null);
  const [showFooter, setShowFooter] = useState(false);
  


  useEffect(()=>{
    fetch('/api')
    .then(response=>response.json())
    .then(response => setData(response.message))
  },[]);


  
  useEffect(() => {
    const checkScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
        setShowFooter(true)
      }else{
        setShowFooter(false)
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (


 <AppMainProvider>
    <div className='app-main'>

     <MainModal/>
      <Header />

      <div>

      </div>
      <div 
      style={{display:
      'none'}}>
        {!data ? 'loading...' : data }
      </div>

  
      <div className='super-main'>
        <div className='super-main-inner'>
        <Routing />
        </div>
      </div>

      <div className={showFooter ? 'footer-outside' : 'footer-none'}>
      <Footing />
      </div>

    </div>
    </AppMainProvider>
  
  )
  
}

export default App;








// ssh-keygen -t rsa -b 4096 -C "ваш_email@example.com"
// git branch -m master main
// git fetch origin
// git branch -u origin/main main
// git remote set-head origin -a
