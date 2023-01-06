import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className='container'>
    <div className="app">
      <header>
      <h1 className='logo'>Встреча с Кришной и Его преданными...</h1>
                        <nav>
                        <h2  href="">Избранное</h2>
                        <h2  href="">Заявки</h2>
                        </nav>
      </header>
      <div className='bannerSection'>               
                <img src={'/img10.jpg'} alt="img" className='imgBanner' width="100%"/> 
                </div>

                <div className="bannerSection">
                        <div className="banner2">
                                <h3 className='Alma'>Ашрам Сочи</h3>
                                <h4 className='Caveat'>Веды как образ жизни</h4>
                                <h3 className='Candara'>«Духовное развитие, активный<br/> отдых и оздоровление!»</h3>
                        </div>
                        </div>
      <div>
        <h3 className='Zagolovok'>Хотите лучший отпуск в Вашей жизни?<br/>
Мы можем Вам это дать …</h3>
      </div>
      <div>
        <p className='Zagolovok2'>Что для Вас важно?</p>
      </div>

      
<div className="liSection">
<div>
  <table class="table">
  <tbody>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>погружение в <a className='Candara3'>духовную практику</a>
 </td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>новое общение, обучение и <a className='Candara3'>развитие</a> </td>
    </tr>
    <tr>
      <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'> спорт или активный отдых на <a className='Candara3'>море</a>, в <a className='Candara3'>горах</a></td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>комфортное комплексное <a className='Candara3'>оздоровление</a></td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>живые эмоции и насыщенные <a className='Candara3'>путешествия</a></td>
    </tr>
    <tr>
      <th scope="row">
      <img src="/logo.png" className="imgLogo" alt="img"></img>
      </th>
      <td className='Candara2'>тихий семейный отдых и интересный <a className='Candara3'>детский досуг</a></td>
    </tr>
    <tr>
    <th scope="row"><img src="/logo.png" className="imgLogo" alt="img"></img></th>
      <td className='Candara2'>все или более одного варианта, такой мой 
<a className='Candara3'> отпуск лучший!</a></td>
    </tr>
  </tbody>
  </table>
</div> 

<div>
<img src="/img61.jpg" className="imgLi" alt="img"></img>
</div>
</div>

<div>
<img src="/fon.png" className="imgLi" alt="img"></img>
</div>




</div>                 
</div>    
    
  );
}

export default App;
