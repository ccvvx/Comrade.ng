import footerlogo from '../assets/images/footerlogo.svg'
import { HiOutlineMail } from 'react-icons/hi'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { BiPhone } from 'react-icons/bi'
const Footer = () => {
    return (
        <section className=' footer bg-[#014124] p-20 px-[5%] lg:px-[10%] relative'>
            <div className="top flex flex-col md:flex-row gap-8">
                <div className='brand'>
                    <div className='logo flex items-center gap-2'>
                        <a href="./"></a>
                        <img src={ footerlogo } />
                        <p className='comrade font-bold text-white text-3xl'>Comrade.ng</p>
                    </div>
                    <div className='mt-5'>
                        <p className=' text-gray-300 text-sm'>We are a team of young and passionate Niigerians <br /> that wants to enlighten young Nigerians on Election <br />exercise. We are on a mission to stop voting apathy <br />among the Nigerians Youths.</p>
                    </div>
                </div>
                <div className="links flex flex-col md:flex-row gap-6 text-sm">
                    <div>
                        <h1 className=' text-white my-3 mb-5 text-lg'>About Us</h1>
                        <a href="./" className=' gap-2 items-center text-white'>
                        <a  href="#" className="py-2 block">About comrade.ng</a>
                        <a  href="#" className="py-2 block">Our Partners</a>
                        <a  href="#" className="py-2 block">Become a Partner</a>
                        <a  href="#" className="py-2 block">Join the Movement</a>
                        </a>
                    </div>
                    <div>
                        <h1 className=' text-white my-3 mb-5 text-lg'>Voter Education</h1>
                        <a href="./" className=' gap-2 items-center text-white'>
                        <a  href="#" className="py-2 block">Electoral Laws</a>
                        <a  href="#" className="py-2 block">Articles/Blogs</a>
                        <a  href="#" className="py-2 block">Know your candidate</a>
                        <a  href="#" className="py-2 block">The Forum</a>
                        </a>
                    </div>
                    <div>
                        <h1 className=' text-white my-3 mb-5 text-lg'>Resources</h1>
                        <a href="./" className=' gap-2 items-center text-white'>
                        <a  href="#" className="py-2 block">PVC Pre-Registration</a>
                        <a  href="#" className="py-2 block">PVC Centers near me</a>
                        <a  href="#" className="py-2 block">Know your Voting Ward</a>
                        </a>
                    </div>
                    <div>
                        <h1 className=' text-white my-3 mb-5 text-lg'>Legal</h1>
                        <a href="./" className=' gap-2 items-center text-white'>
                        <a  href="#" className="py-2 block">Disclaimer</a>
                        <a  href="#" className="py-2 block">Terms and Conditions</a>
                        <a  href="#" className="py-2 block">Privacy Policy</a>
                        </a>
                    </div>
                </div>
            </div>

            <div className="social flex flex-col md:flex-row py-8 gap-8 text-sm">
                <div className='flex flex-col gap-3'>
                    <div className='shrink-0'>
                        <a href="./" className=' flex gap-2 items-center'>
                        <HiOutlineMail style={{ color:'white'}} size={22} />
                        <p className=' underline text-white'>servicomrade@gmail.com</p>
                        </a>
                    </div>
                    <div className='shrink-0'>
                        <a href="./" className=' flex gap-2 items-center'>
                        <FiTwitter style={{ color:'white'}} size={22} />
                        <p className=' underline text-white'>twitter.com/comradeng</p>
                        </a>
                    </div>
                    <div className='shrink-0'>
                        <a href="./" className=' flex gap-2 items-center'>
                        <FiFacebook style={{ color:'white'}} size={22} />
                        <p className=' underline text-white'>facebook.com/comradeng</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='shrink-0'>
                        <a href="./" className=' flex gap-2 items-center'>
                        <BiPhone style={{ color:'white'}} size={22} />
                        <p className=' underline text-white'>+2347086354251</p>
                        </a>
                    </div>
                    <button className='shrink-0'>
                        <a href="https://twitter.com/ListinHQ" target="_blank" rel="noopener noreferrer" className=' flex gap-2 items-center'>
                        <FiInstagram style={{ color:'white'}} size={22} />
                        <p className=' underline text-white'>instagram.com/comradeng</p>
                        </a>
                    </button>
                </div>
            </div>
        
        <button className='bg-white self-start text-[#00874A] p-4 text-sm rounded-lg absolute right-[5%] lg:right-[10%]'>Contact Us</button>
    </section>
  )
}

export default Footer