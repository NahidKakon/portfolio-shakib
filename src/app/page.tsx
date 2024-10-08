import React from "react";

export default function AboutMe() {
    return(
<>
  <div className="gallery">
{/*     <a target="_blank" href=""https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fkey_skills-kanPzLU5gjLRwsNGO4P6jWmd36YO1a.jpg"
"> */}
      <img src=""https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fkey_skills-kanPzLU5gjLRwsNGO4P6jWmd36YO1a.jpg"
" alt="Cinque Terre" width={600} height={400} />
{/*     </a> */}
    <div className="desc"></div>
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
  <div className="gallery">
    <a target="_blank" href="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Faboutme%252Fcareer-ns5YsyJjwHh3swcaRhHulRmADbxPQj.jpg">
      <img src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Faboutme%252Fcareer-ns5YsyJjwHh3swcaRhHulRmADbxPQj.jpg" alt="Forest" width={600} height={400} />
    </a>
    <div className="desc"></div>
  </div>
  <div className="gallery">
    <a target="_blank" href="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252FcredlyBadge-9P5Y9W8nHEb3d2B16cUbkbveNmrfqQ.png">
      <img
        src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252FcredlyBadge-9P5Y9W8nHEb3d2B16cUbkbveNmrfqQ.png"
        alt="Northern Lights"
        width={600}
        height={400}
      />
    </a>
    <div className="desc"></div>
  </div>
  <div className="gallery">
    <a target="_blank" href="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fcertificate-Oe9orGDMCTmTJ20g99bbU1FAFw4iA7.jpg">
      <img src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fcertificate-Oe9orGDMCTmTJ20g99bbU1FAFw4iA7.jpg" alt="Mountains" width={600} height={400} />
    </a>
    <div className="desc"></div>
  </div>
        <style
  dangerouslySetInnerHTML={{
    __html:
      "\ndiv.gallery {\n  margin: 5px;\n  border: 1px solid #ccc;\n  float: left;\n  width: 180px;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n"
  }}
/>

</>
    )
}
