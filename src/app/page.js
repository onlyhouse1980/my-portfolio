'use client'

import Image from 'next/image'
import ObcgVideo from './components/ObcgVideo'
import Kaleidoscope from './components/Kaleidoscope'

import Link from 'next/link'

export default function Home() {
  return (
    
  
  
    <div className="container">
      <div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <Image className="icons" width={800} height={800} src="/img/internet-icon.png" />          
            <h3>Websites</h3>
            <p className="cardface">(HTML, CSS and Javascript)</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table className="table">
                <tr>
                    <td>
                      <Link href="https://obcg.org"><ObcgVideo /> </Link>
                      <Link href="https://obcg.org">obcg.org Public Utilities</Link>
                    </td>
                    <td>
                      <Link href="/html-site/index.html"><Image src="/img/sakura.webp" width={3070} height={1742} /> </Link>
                      <Link href="/html-site/index.html">Sakura Ramen </Link>  
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href="/html2/index.html" ><Image src="/img/dakademie.webp" width={3070} height={1742} /> </Link>
                      <Link href="/html2/index.html">Developer Akademie</Link>
                    </td>
                  <td>
                    <Link href="./kochwelt/index.html" ><Image src="/img/kochwelt.webp" width={3070} height={1742} /> </Link>
                    <Link href="./kochwelt/index.html" >Kochwelt</Link>
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
            <Image className="icons" src="/img/js2.png" width={800} height={800} />
            <h3>Apps</h3> 
            <p className="cardface">Apps and Progressive Web Apps written in Javascript</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table className="table">
                <tr>
                  <td>
                    <Link href="https://weather.ryanernstnyberg.com/" ><Image src="/img/weather.webp" width={3070} height={1742} /> </Link>
                    <Link href="https://weather.ryanernstnyberg.com/" >Weather App</Link>
                  </td>
                  <td>
                    <Link href="https://trelloesque.vercel.app/" ><Image src="/img/projectmanager.webp" width={3070} height={1742} />  </Link>
                    <Link href="https://trelloesque.vercel.app/" > Project Manager</Link>
                  </td>
                  </tr>
                  <tr>
                      <td>
                        <Link href="/pokedex/index.html" ><Image src="/img/pokedex.webp" width={3070} height={1742} />  </Link>
                        <Link href="/pokedex/index.html" >Pokedex App</Link>
                      </td>
                      <td>
                        <Link href="./fetch2/index.html" ><Image src="/img/thesaurus.webp" width={3070} height={1742} /> </Link>
                        <Link href="./fetch2/index.html" >Deutsch Thesaurus</Link>
                      

                      </td>
                  </tr>
              </table>
          </div>
          </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <Image className="icons" src="/img/play.png" width={800} height={800} />
            <h3>Playtime</h3> 
            <p className="cardface">Games and Creative Digital Art</p>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
              
              <table className="table">
                <tr>
                  <td>
                    <Link href="./tictactoe/index.html" ><Image src="/img/tictactoe.webp" width={3070} height={1742} /> </Link>
                    <Link href="./tictactoe/index.html" >TicTacToe</Link>
                  </td>
                  <td>
                    <Link href="/elpollo/index.html" ><Image src="/img/elpolloloco.webp" width={3070} height={1742} /> </Link>
                    <Link href="/elpollo/index.html" > El Pollo Loco</Link>
                  </td>
                </tr>
                <tr>
                    <td>
                      <Link href="https://next-image-gallery-woad.vercel.app/" ><Image src="/img/NextJSImageGallery.png" width={3070} height={1742} /> </Link>
                      <Link href="https://next-image-gallery-woad.vercel.app/">NextJS Image Gallery</Link>
                    </td>
                    <td>
                      <Link href="#"><Kaleidoscope /></Link>
                      <Link href="#">Kaleidoscope</Link>
                    </td>
                </tr>
                 
              </table>
              
          </div>
          </div>
      </div>
    </div>  
     
  )
}
