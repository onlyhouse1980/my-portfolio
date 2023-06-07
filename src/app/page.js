'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <body>
  <div className="header">
    <h1>Ryan Ernst Nyberg</h1>
    <h2>Full Stack Developer</h2>
    <Link href="mailto:ryan@ryanernstnyberg.com"><h3>ryan@ryanernstnyberg.com</h3></Link>
  </div>     
  <div className="cards">
  
    <div className="container">
      <div>
      <div className="card">
        <div className="face face1">
          <div className="content">
              <img className="icons1" src="./img/internet-icon.png" />          
            <h3>Websites</h3><br />
            <p className="cardface">(HTML, CSS and Javascript)</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table id="table1" className="table">
                <tr>
                  <td>
                    
                    <Link href="https://obcg.org"><img src="/img/obcg.webp"  /><br />obcg.org Public Utilities</Link>
                  </td>
                  <td>
                    <Link href="/html-site/index.html"><img src="./img/sakura.webp"  /><br />Sakura Ramen </Link>  
                  </td>
                  </tr>
                  <tr>
                  <td>
                    <Link href="/html2/index.html" type="button"><img src="./img/dakademie.webp"  /><br />Developer Akademie</Link>
                  </td>
                  <td>
                    <Link href="./kochwelt/index.html" type="button"><img src="./img/kochwelt.webp"  /><br />Kochwelt</Link>
                  </td>
                </tr>
                
              </table>
          </div>
          </div>
      </div>
    </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img className="icons2" src="./img/js2.png" />
            <h3>Apps</h3><br />
            <p className="cardface">Apps and Progressive Web Apps written in Javascript</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table id="table2" className="table">
                <tr>
                  <td>
                    <Link href="https://weather.ryanernstnyberg.com/" type="button"><img src="./img/weather.webp"  /><br />  Weather App</Link>
                  </td>
                  <td>
                    <Link href="https://trelloesque.vercel.app/" type="button"><img src="./img/projectmanager.webp"  /> <br /> Project Manager</Link>
                  </td>
                  </tr>
                  <tr>
                      <td>
                        <Link href="/pokedex/index.html" type="button"><img src="./img/pokedex.webp"  /> <br /> Pokedex App</Link>
                      </td>
                      <td>
                        <Link href="./fetch2/index.html" type="button"><img src="./img/thesaurus.webp"  /><br />Deutsch Thesaurus</Link>
                      

                      </td>
                  </tr>
              </table>
          </div>
          </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img className="icons3" src="./img/play.png" />
            <h3>Playtime</h3><br />
            <p className="cardface">Games and Creative Digital Art</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table id="table3" className="table">
                <tr>
                  <td>
                    <Link href="./tictactoe/index.html" type="button"><img src="./img/tictactoe.webp"  /><br />TicTacToe</Link>
                  </td>
                  <td>
                    <Link href="/elpollo/index.html" type="button"><img src="./img/elpolloloco.webp"  /><br /> El Pollo Loco</Link>
                  </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="https://next-image-gallery-woad.vercel.app/" type="button"><img src="./img/NextJSImageGallery.png"  /><br />
                      NextJS Image Gallery</Link>
                    </td>
                  </tr>
                 
              </table>
          </div>
          </div>
      </div>
    </div>  
  </div>    
    
  
  
</body>
  )
}
