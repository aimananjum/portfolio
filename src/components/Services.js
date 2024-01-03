import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const services = [
  {
    name:'Front-End Development',
    description:
      'It was popularised in the 1960s with the  and more recently with desktop.',
    link:'learn more',
  },
  {
    name:'Software Development',
    description:
      'It was popularised in the 1960s with the  and more recently with desktop.',
    link:'learn more',
  },
  {
    name:'Full stack Development',
    description:
      'It was popularised in the 1960s with the  and more recently with desktop.',
    link:'learn more',
  },
  {
    name:'Software Testing',
    description:
      'It was popularised in the 1960s with the  and more recently with desktop.',
    link:'learn more',
  },

]

const Services = () => {
  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Software developer at Hexaware Technologies.</h3>
          <button className='btn btn-sm'>See my work</button>
        </motion.div>
        <motion.div className='flex-1'
        variants={fadeIn('left',0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}>
          <div>
            {services.map((service,index)=>{
              const {name,description,link}=service;
              return (
                <div className='border-b border-white/20 h-[120px] mb-[5px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#'
                    className='btn w-9 h-9 mb-[15px] flex justify-center items-center'
                    >
                      <BsArrowUpRight/>
                    </a>
                    <a href='#'
                    className='text-gradient text-sm'
                    >{link}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
