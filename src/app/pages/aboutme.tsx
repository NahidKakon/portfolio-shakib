import React from "react";

export default function AboutMe() {
    return(

        
<section className={styles.section}>
        <h2>Beautiful Pictures</h2>
        <div className={styles.imageGallery}>
          
          <Image
            src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fkey_skills-kanPzLU5gjLRwsNGO4P6jWmd36YO1a.jpg"
            alt="A beautiful beach"
            width={400}
            height={300}
            className={styles.image}
          />
           <Image
            src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Faboutme%252Fcareer-ns5YsyJjwHh3swcaRhHulRmADbxPQj.jpg"
            alt="A scenic landscape"
            display= 'flex'
            position= 'absolute'
            width={200}
            height={100}
            className={styles.image}
            
          />
          <Image
            src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252FcredlyBadge-9P5Y9W8nHEb3d2B16cUbkbveNmrfqQ.png"
            alt="A forest trail"
            width={3000}
            height={1800}
            className={styles.image}
          />
            <Image
            src="https://vercel.com/nahids-projects-a2eed867/~/stores/blob/store_UhIExemgiHHBfkeK/browser?file_url=https%253A%252F%252Fuhiexemgihhbfkek.public.blob.vercel-storage.com%252Fcertificate-Oe9orGDMCTmTJ20g99bbU1FAFw4iA7.jpg"
            alt="A forest trail"
            width={3000}
            height={1800}
            className={styles.image}
          />
        </div>
      </section>

        
//         <>
//   <img src="key_skills.jpg" alt="Paris" className="center" />
//   <img src="career.jpg" alt="Paris" className="center" />
//   <img src="credlyBadge.png" alt="Paris" className="center" />
//   <img src="certificate.jpg" alt="Paris" className="center" />
// </>

    )
}
