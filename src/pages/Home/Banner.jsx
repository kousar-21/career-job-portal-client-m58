import React from 'react';
import { motion, scale, transform } from "motion/react"
import Team1 from '../../Images/team-1.jpg'
import Team2 from '../../Images/team-2.jpg'


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                            src={Team1}
                            animate={{y: [60,110,60]}}
                            transition={{duration: 4, repeat: Infinity}}
                            className="max-w-sm border-s-8 border-b-8 border-blue-700 rounded-t-4xl rounded-r-4xl shadow-2xl"
                        />
                        <motion.img
                            src={Team2}
                            animate={{x: [100,150,100]}}
                            transition={{duration: 8, delay:2, repeat: Infinity}}
                            className="max-w-sm border-s-8 border-b-8 border-blue-700 rounded-t-4xl rounded-r-4xl shadow-2xl"
                        />
                    </div>
                    <div className='flex-1' style={{ perspective: 1000 }} >
                        {/* <motion.h1
                            initial={{ rotateY: 0 }}
                            animate={{
                                rotateY: 360,
                                scaleX: -1,
                            }}
                            transition={{ duration: 4 }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="text-5xl font-bold">Explore <motion.span
                                animate={{
                                    color: ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#386641"],
                                    transition: { duration: 3, repeat: Infinity },
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >Awesome</motion.span> jobs For You!</motion.h1> */}

                        <motion.h1
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { duration: 4 }
                            }} className="text-5xl font-bold">Remote <motion.span
                                animate={{
                                    color: ["#dc2f02", "#f72585", "#03045e", "#7209b7", "#5a189a", "#3a0ca3", "#4361ee", "#d90429", "#386641"],
                                    transition: { duration: 3, repeat: Infinity }
                                }}
                            >And Freelancing</motion.span>  jobs For you!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;