import './index.css'
function About (){
  return(
    <div className='about'>
<h1>ABOUT US</h1>

<div className="mission">
<div>
    <h2>Mission</h2>
    <p>The mission of our upcycling app is to promote <br/>sustainable living by reducing clothing waste and <br/>
    encouraging users to participate in the production <br/> of upcycled products.</p>
</div>
  <img src="/Img/peoplerycling.png" alt=""/>
  </div>

  <div className="background">
    <img src="/Img/backgorund.png" alt=""/>
    <div>
      <h2>Background</h2>
      <p>Our app is designed to address the growing issue  
        of <br/> fashion waste and the negative stigma 
      associated <br/>with recycled products. By providing a
      platform for   <br/>  users to upcycle clothing waste into functional products.</p>

    </div>
  </div>

  <div className="approach">
    <div>
      <h2>Our Approach</h2>
      <p>Our approach is centered around creating an 
      intuitive <br/> and user-friendly interface that 
      educates users about <br/>the benefits of upycling and provides 
      them with the tools  <br/>to participate in the process.</p>

    </div>
    <img src="/Img/upcycling.png" alt=""/>
  </div>




 
</div>
  )

}
export default About;