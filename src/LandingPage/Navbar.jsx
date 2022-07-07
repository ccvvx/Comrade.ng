import LogoImg from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='nav md:flex font-inter h-full '>
        <ul className='container flex justify-evenly items-end p-5 font-inter '>
            <li>
                <a href="./" className='logo flex gap-2'>
                    <img src={ LogoImg } />
                    <p className='comrade font-bold text-black'>Comrade.ng</p>
                </a>
            </li>
            <li>
                <a href="./">
                <span>About Us</span>
                </a>
            </li>
            <li>
                <a href="./">
                <span>Register to vote</span>
                </a>
            </li>
            <li>
                <a href="./">
                <span>Voter Education</span>
                </a>
            </li>
            <li>
                <a href="./">
                <span>Gallery</span>
                </a>
            </li>
        <button className='movement bg-[#00874A] p-3 text-white rounded-lg '>Join the Movement</button>
        </ul>

    </nav>
  )
}

export default Navbar