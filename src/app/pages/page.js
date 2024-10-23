// import Image from 'next/image';
import styles from './globals.css';
// import spacing from './globals.css';
import Link from 'next/link';



export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Front-End Website</h1>
        <p>A simple one-page site with pictures, videos, and texts</p>
      </header>
      <button/>
      <div style={{ height: '100vh', display: 'flex', position: 'absolute', overflow: 'hidden', top: 0, right: 0, justifyContent: 'right', alignItems: 'right', backgroundColor: '#ffffff' }}>
      {/* Video that will autoplay, loop, and take up 100% width */}
      <video
        src="/videos/portfolio_home.mp4"  // Path to the video (relative to the public folder)
        autoPlay   // Automatically starts the video
        loop       // Continuously plays the video
        muted      // Mute the video (useful for autoplaying)
        playsInline  // Ensures the video doesn't go fullscreen on mobile
        style={{ width: '100%', height: '100%' }} // Styling to fit video within the page
      />
    </div>

      <div style={{ height: '100vh', display: 'flex', position: 'absolute', overflow: 'hidden', top: 0, left: 0,  objectFit: 'cover', justifyContent: 'left', alignItems: 'left', backgroundColor: '#000' }}>
      {/* Video that will autoplay, loop, and take up 100% width */}
      
      <video
        src="/videos/animate.mp4"  // Path to the video (relative to the public folder)
        autoPlay   // Automatically starts the video
        loop       // Continuously plays the video
        muted      // Mute the video (useful for autoplaying)
        playsInline  // Ensures the video doesn't go fullscreen on mobile
        style={{ width: '100%', height: 'auto' }} // Styling to fit video within the page
      />
    </div>
    <div style={{ textAlign: 'right', margin: 'bottom' }}>
        <Link href="https://test1-ten-wheat.vercel.app/">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'lal kali diya brown',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Visit My Website
          </button>
        </Link>
        <a href="\images\Nahid_Shakib-_cv.pdf"className="button"> </a>
        <button
            style={{
              absolute:'10px',
              padding: '10px 29px',
              backgroundColor: 'brown',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            About Me
          </button>

      </div>
 
  </div>
      

  );
}
