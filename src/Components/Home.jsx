import React from "react";
import "./Home.css"
import github from "../Img/github.png"
import sparkle from "../Img/sparkle.png"
import buyer from "../Img/buyer.png"
import beauty from "../Img/beauty.png"
import profile from "../Img/profile.png"
import fashion from "../Img/fashoin.png"


const Home = () => {
 
  function downloadResume() {
    window.open("https://drive.google.com/file/d/1ilSdY8yAEj45R8zQ2fCrEIf3F-oRN91S/view?usp=share_link", "_blank", "noopener,noreferrer");
    window.location.href = "https://drive.google.com/uc?export=download&id=1ilSdY8yAEj45R8zQ2fCrEIf3F-oRN91S";
}
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  const navLink = document.querySelectorAll(".nav-link");
  navLink.forEach(n => n.addEventListener("click", closeMenu));

  // toggle the "active" class on the nav menu container
  const navMenuContainer = document.querySelector("#nav-menu");
  navMenuContainer.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");


if (hamburger && navMenu) {
  hamburger.addEventListener("click", mobileMenu);
}
  return (
    <div>
      <nav id="nav-menu">
           <h3>Shashank Bijapur</h3>
        <div id="nav-content"> 
        <ul class="nav-menu">
      <li><a href="#home" class="nav-link home">Home</a></li>
      <li><a href="#about" class="nav-link about">About</a></li>
      <li><a href="#skills" class="nav-link skills">Skills</a></li>
      <li><a href="#projects" class="nav-link projects">Projects</a></li>
      <li><a href="#contact" class="nav-link contact">Contact</a></li>
      <li><a class="nav-link resume" id="resume-button-1" href="#" onClick={downloadResume}>Resume</a></li>
    </ul>
        </div>
        <div class="hamburger" id="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      </nav>

      <section id="home">
        <div id="home-div">
          <div>
          <h1 id="user-detail-name">I'M SHASHANK</h1>
        <p id="user-detail">FULL STACK DEVELOPER</p>
        <button id="resume-button-2" onClick={downloadResume}>Resume</button>
          </div>
            <img style={{width:"400px"}} class="home-img" src={profile} alt="home-img" />
        </div>
      </section>

      <section id="about" class="about section">
        <h1 style={{fontSize:"40px"}}>About Me</h1>
        <p id="user-detail-intro">I am an Aspiring Full Stack Developer (MERN),, eager to apply my knowledge and skills to real-world challenges.
        With a strong foundation in HTML, CSS, JavaScript, and several popular frameworks and libraries, I am well equipped to create dynamic and responsive web applications.
I have hands-on experience in developing and deploying full-stack applications using the latest tools and technologies.
</p>
      </section>

      <section id="skills">
        <h1 style={{fontSize:"40px"}}>Technical Skills</h1>
        <div id="skill-card">
        <div class="skills-card">
        <h2 class="skills-card-name">Front-End</h2>
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt="Skill 1" class="skills-card-img" />
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt="Skill 1" class="skills-card-img" />
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt="Skill 1" class="skills-card-img" />
          <img width={"125px"} src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png" alt="Skill 1" class="skills-card-img" />
          <img src="https://cdn-icons-png.flaticon.com/128/875/875209.png" alt="Skill 1" class="skills-card-img" />
          <img width={"130px"} src="https://th.bing.com/th?id=OIP.yPRN87C9vjrdtIBY7UTAiAHaGs&w=262&h=237&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Skill 1" class="skills-card-img" />
          <h3>My preferred tech-stacks for front-end web development and component design.</h3>
        </div>
        <div class="skills-card">
        <h2 class="skills-card-name">Back-End</h2>
        <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="Skill 2" class="skills-card-img" />
          <img width={"150px"} src="https://technologypoint.in/wp-content/uploads/2021/06/MongoDB-sm-logo.gif" alt="Skill 2" class="skills-card-img" />
          <img width={"250px"}  src="https://th.bing.com/th/id/OIP.VU8zfORVvPpFtR9cIjISUQHaCE?pid=ImgDet&rs=1" alt="Skill 2" class="skills-card-img" />
          <h3 >My preferred tech-stacks for back-end web programming and database architecture.</h3>
        </div>
        <div class="skills-card">
        <h2 class="skills-card-name">Tools</h2>
          <img width={"150px"}  src="https://th.bing.com/th/id/R.399ed0d9bd0e25679102ed108c1e2f9a?rik=di77LvuyaNCKCA&riu=http%3a%2f%2fsearchvectorlogo.com%2fwp-content%2fuploads%2f2020%2f02%2fnetlify-logo-vector.png&ehk=InaW2I304FXcn9mKqJ4buxeXaddZjSLT8WHn74KOqvQ%3d&risl=&pid=ImgRaw&r=0" alt="Skill 2" class="skills-card-img" />
          <img width={"100px"}  src="https://th.bing.com/th?q=GitHub+Photo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="Skill 2" class="skills-card-img" />
          <img width={"150px"}  src="https://th.bing.com/th?id=OSK.80288c5ba03544594ad95612bfd7c824&w=188&h=132&c=7&o=6&dpr=1.3&pid=SANGAM" alt="Skill 2" class="skills-card-img" />
          <h3>My favorite tools for version control, code editing, and deployment.</h3>
        </div>
        </div>
      </section>

     
      <section id="github">
  <h1>My Statistics</h1>
  <div id="github-container">
    <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=ShashankBijapur&show_icons=true&count_private=true" alt="GitHub stats" />
    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=ShashankBijapur&layout=compact" alt="Top languages" />
  </div>
  <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=ShashankBijapur" alt="GitHub streak stats" />
</section>

        <h1 style={{fontSize:"40px"}}>My Contribution</h1>
        <div  class="react-activity-calendar">
          <img src={github} alt="Project 1" />
        </div>
        

      <section id="projects">
        <h1>Projects</h1>
        <div>
        <div class="project-card">
          <img src={sparkle} alt="Project 1" />
          <h3 class="project-title">Sparkle-Jewelry</h3>
          <p class="project-description">Sparkle-jewelry is an e-commerce website that primarily sells and delivers jewelry and ornaments. This is a individual project. I have created clone of Cartlene website in 5 days. User able to signup and login successfully. Also user able to see, buy, add and make payment through website.</p>
          <h5 class="project-tech-stack">React | Javascript | Chakra UI</h5>
          <a href="https://github.com/ShashankBijapur/sparkle-jewelry" class="project-github-link" target="_blank" rel="noopener"><button>Code</button></a>
          <a href="https://sparkle-jewelry-24-09.netlify.app/" class="project-deployed-link" target="_blank" rel="noopener"><button>live</button></a>
        </div>
        <div class="project-card">
          <img src={buyer} alt="Project 2" />
          <h3 class="project-title">Buyers Edge</h3>
          <p class="project-description">Buyers-edge is an e-commerce website that primarily sells and delivers gift products. This is individual project. I have created clone of Shop.com website in 5 days. User able to signup and login successfully. Also user able to see, buy, add and make payment through website.</p>
          <h5 class="project-tech-stack">Javascript | HTML | CSS </h5>
          <a href="https://github.com/ShashankBijapur/buyers-edge" class="project-github-link" target="_blank" rel="noopener"><button>Code</button></a>
          <a href="https://buyers-edge-24.netlify.app/" class="project-deployed-link" target="_blank" rel="noopener"><button>live</button></a>
        </div>
        <div class="project-card">
          <img src={beauty} alt="Project 1" />
          <h3 class="project-title">Glam Goddess</h3>
          <p class="project-description">Glam-godess is an e-commerce website that primarily sells and delivers cosmetics and beauty products. This is a collaborative project, and clone of Beauty-bebo website created in the duration of 5 days. User able to signup and login successfully. Also user able to see, buy, add and make payment through website.</p>
          <h5 class="project-tech-stack">Javascript | HTML | CSS </h5>
        <a href="https://github.com/ShashankBijapur/glam-godess" class="project-github-link" target="_blank" rel="noopener"><button>Code</button></a>
          <a href="https://silly-crostata-613bb2.netlify.app/" class="project-deployed-link" target="_blank" rel="noopener"><button>live</button></a>
        </div>
        <div class="project-card">
          <img src={fashion} alt="Project 1" />
          <h3 class="project-title">Fashoin Flair</h3>
          <p class="project-description">Fashoin Flair is an e-commerce website that primarily sells and delivers cloths and accessiories for men, women and kids . This is a collaborative project, and clone of Beauty-bebo website created in the duration of 5 day. User able to signup and login successfully. Also user able to see, buy, add and make payment through website.There is a admin panel also in this project.</p>
          <h5 class="project-tech-stack">React | Redux | Chakra </h5>
        <a href="https://github.com/ShashankBijapur/fashion-flare" class="project-github-link" target="_blank" rel="noopener"><button>Code</button></a>
          <a href="https://fashion-flare.vercel.app/" class="project-deployed-link" target="_blank" rel="noopener"><button>live</button></a>
        </div>
        </div>
        </section>

        <section id="contact">
        <h1>Contact</h1>
          <div>

          <h5 id="contact-phone">Contact Number - +917483157274</h5>
          <h5 id="contact-email">Email Address - <a  href="https://shashankbijapur24@gmail.com" target="_blank" rel="noopener">shashankbijapur24@gmail.com</a></h5>
          </div>

          <div id="gitcont">
          <a id="contact-github" href="https://github.com/ShashankBijapur" target="_blank" rel="noopener">
        <img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="" />
        </a>
        <a id="contact-linkedin" href="https://www.linkedin.com/in/shashank-bijapur-b9b90a223" target="_blank" rel="noopener">
        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" alt="" />
        </a>
        <a id="contact-email" href="https://shashankbijapur24@gmail.com" target="_blank" rel="noopener">
         <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" />
        </a>
          </div>
      </section>
     
        </div>

  )
}

export {Home}