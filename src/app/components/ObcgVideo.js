'use client'

import styles from './Whales.module.css'
import Link from 'next/link'


const ObcgVideo = () => {
  
    const media_urls = [
      
      {
        id: 1,
        title: 'OBCG',
        url: 'videos/video3',
        video_url:
          'https://res.cloudinary.com/dfnaxhqqq/video/upload/v1685777932/ryanernstnyberg.com/obcg_zigy1j.mp4#t=0.001',
      },
    ]
  
    // handle mouse enter
    const handleMouseEnter = (e) => {
      const vid = e.target
      vid.muted = true
      vid.play()
    }
  
    // handle mouse leave
    const handleMouseLeave = (e) => {
      const vid = e.target
      vid.muted = false
      vid.currentTime = 0
      vid.pause()
    }
  
    return <>
      
        <div className='row'>
          {media_urls.map((media) => (
            <div key={media.id} >
              <Link href={media.url} legacyBehavior>
              <div>
                <div>
                
                  <video
                    preload="metadata"
                    width='100%'
                    height='90px'
                    
                    
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <source src={media.video_url} type='video/mp4' />
                  </video>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      
    </>;
  
  }
  
  export default ObcgVideo