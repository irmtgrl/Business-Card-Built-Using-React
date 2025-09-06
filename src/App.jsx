import './App.css'

function Header() {
  return (
    <header>
      <h2>Building Business Card Design Using React</h2>
    </header>
  )
}

function Main() {
  return (
    <main>
      <div className="nav">
        <h4>İrem</h4>
        <h4>Web Designer</h4>
      </div>

      <div className="info-cnt">

        <div className="hr-box">
          <div className="profile-pic">
            <img src="./src/assets/me.jpg" alt="picture of me"/>
          </div>

          <div className="vr-box">
            <div>
              <h4>ABOUT</h4>
              <p>Hey, I'm a 24 yr old self-taught Web Developer and I love working in this field! Right now 
                I'm learning React basics and building this card.</p>
            </div>

            <div className="hr-box">
              <div>
                <h4>STRENGHTS</h4>
                <p>Motivation</p>
                <p>Talent</p>
                <p>Hard-work</p>
              </div>

              <div>
                <h4>HOBBIES</h4>
                <p>Reading</p>
                <p>Yoga</p>
              </div>          
            </div>
          </div>
        </div>

        <div className="hr-box spaced">
          <div className="socials">
            <h4>SOCIALS</h4>
            <div>
              <a href="https://www.linkedin.com/in/irem-tuğrul-75418a260"><img src="./src/assets/in.svg"/></a>
              <a href="https://www.behance.net/iremtugrul"><img src="./src/assets/be.svg"/></a>
              <a href="https://www.iremtugrul.com"><img src="./src/assets/website.svg"/></a>
            </div>
          </div>

          <div className="skills">
            <h4>SKILLS</h4>
            <img src="./src/assets/skills.png" />
          </div>
        </div>

      </div>
    </main>
  )
}

export { Header, Main }
