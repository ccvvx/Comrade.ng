import Movement from '../assets/images/Movement.png'

const JoinTheMovement = () => {
  return (
    <section className=' p-20 px-[15%]'>
        <div className='bg-[#00874A] h-[450px] rounded-xl vote flex flex-col text-white p-[8%] gap-3' style={{ backgroundImage: `url('${Movement}')`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
          {/* <img src={ Movement } width={1000} /> */}
          <h1 className='text-4xl font-bold'>Your Vote is Your <br /> Voice</h1>
          <p className=' pt-3 pb-4'>
            We have to get involved in creating the future <br />we so desire for our country, for our loved <br />ones, and for ourselves.
          </p>
          <button className='bg-white self-start text-[#00874A] p-4 text-sm rounded-lg'>Join the Movement</button>
        </div>
    </section>
  )
}

export default JoinTheMovement