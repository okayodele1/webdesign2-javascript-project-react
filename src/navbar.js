import logo from './logo.png'
const NavBar = () => {
    return(

<div class="menu"> <div class="logo"> <img src={logo} className="logo-image" alt="logo" /></div><div class="navigations"><a href="/"><li>Home</li></a><a href="/about"><li>About</li></a><a href="/contact"><li>Contact</li></a><a href="/login"><li>Login</li></a><a href="/membership"><li>Membership</li></a><a href="/donate"><li>Donate</li></a></div></div>

    );

}

export default NavBar;