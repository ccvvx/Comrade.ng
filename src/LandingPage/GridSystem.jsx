import writer from '../assets/images/writer.png' 
import { BsArrowRight } from 'react-icons/bs'

const GridSystem = () => {
  return (
    <section className=' section bg-[#FBFBFB]'>
    <div>
        <h1 className='header text-center pt-20 text-2xl font-semibold'>
        With the right information, we can elect competent and credible <br/> Leaders into political positions.
        </h1>
    </div>
    <div className=' writer-img grid grid-cols-[_repeat(auto-fit,_minmax(370px,_1fr))] gap-9 py-10'>

    <div className=' p-8'>
        {/* picture 1 */}
        <img src={ writer } width={1000} className=" rounded" />
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a> 
    </div>
    <div className=' p-8'>
        {/* picture 2 */}
        <img src={ writer } width={1000} className=" rounded" />
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a> 
    </div>
    <div className=' p-8'>
        {/* picture 3 */}
        <img src={ writer } width={1000}  className=" rounded"/>
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a> 
    </div>
    <div className=' p-8'>
        {/* picture 4 */}
        <img src={ writer } width={1000}  className=" rounded"/>
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a> 
    </div>
    <div className=' p-8'>
        {/* picture 5 */}
        <img src={ writer } width={1000} className=" rounded" />
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a> 
    </div>
    <div className=' p-8'>
        {/* picture 6 */}
        <img src={ writer } width={1000} className=" rounded" />
        <h1>This is a title</h1>
        <p>This is the sub-title of the heading, it is a brief introduction to the Voter education. This is the sub-title of the heading, it is a brief introduction. This is the sub-title of the heading, it is a brief introduction</p>
        <a href=""><p className=' flex items-center gap-2 text-[#09401C]'>Know more <BsArrowRight /> </p>
        
        </a>        
    </div>
    </div>
    </section>
  )
}

export default GridSystem
