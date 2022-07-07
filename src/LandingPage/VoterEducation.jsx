import GlassImg from '../assets/images/GlassImg.png'

const VoterEducation = () => {
  return (
    <section className='container h-full bg-[#FBFBFB] flex'>
        <div className='voter-edu p-36'>
            <h1 className='header text-4xl font-bold '>Voter Education</h1>
            <p className='para py-8'>We believe in the power of Nigerians to vote credible and <br/> competent Leaders when given access to the right <br/> information.</p>
            <input type="email" className='email p-3 bg-white border border-[#00874A] rounded' placeholder='Type your Email Address' />
            <button className='newsletter-btn  bg-[#00874A] p-3 text-white rounded'>Send me Newsletters</button>
        </div>

        <div className='image mt-32 ml-36'>
            <img src={ GlassImg } width={500} />
        </div>
    </section>
  )
}

export default VoterEducation