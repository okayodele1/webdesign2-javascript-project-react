import green from './green.jpg';
import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';

const Home = () => {
  return (
    <div class="main">  
      <div class="sections">
        <div id="slider" class="slider">
          <div>
            <h2>Join The Movement To end Child Poverty</h2>
            <p> We invite you to connect with us, whether to learn more about our ongoing initiatives, express your interest in volunteering, or inquire about partnership opportunities. Your involvement, support, and ideas are invaluable in furthering our mission and creating lasting change in the world</p>
            <a href="/donate"><button> Donate Now </button></a>
          </div>
        </div>
      </div>
      <div class="sections">
        <div class="sec1-div">
          <h1>About us</h1>
          <p>Welcome to our NGO dedicated to extending compassion and support to those in need across the globe. Founded on the core values of altruism and empathy, our organization strives to make a meaningful impact on society by spearheading various charitable initiatives and fundraising campaigns.</p>
          <a href="/about"><button >Read more</button></a>
        </div>
        <div class="sec2-div">
          <img src={green} className="green" alt="Green Background"/>
        </div>
      </div>
      <div class="section">
        <div class="whatwedo">- What We Do -</div>
        <div class="activity" style={{backgroundImage:`url(${img1})`}} alt="Child's Education Support"><h2>Child's Education Support</h2></div>
        <div class="activity" style={{backgroundImage:`url(${img2})`}} alt="Orphans Upbringing"><h2>Orphans Upbringing</h2></div>
        <div class="activity" style={{backgroundImage:`url(${img3})`}} alt="Widows Support Programmes"><h2>Widows Support Programmes</h2></div>
      </div>
      <div class="sections">
        <center><h2> Search within our road map</h2></center>
        <input type="text" name="search" id="search" />
        <center> <button> Find an item </button></center>
      </div>
      <div class="sections" >
        <div class="paral">Let us build the future together and make the world a better place for the generations unborn through our benevolence act towards the needy for a better future transition.
          <a href="/donate" style={{marginRight:34}}><button >Donate </button></a>
        </div>
      </div>
      <div class="sections"></div>
    </div>
  );
}

export default Home;
