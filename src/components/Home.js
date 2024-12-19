import React from 'react'
import gif from '../assets/gif.gif'
import twitter from '../assets/twitter.png'
import buy from '../assets/buy.png'
import chart from '../assets/chart.png'
import telegram from '../assets/telegram.png'

function Home() {
    return (
        <div className='home flex flex-col justify-center items-center w-full'>
            <img src={gif} alt="" className='w-96 rounded-2xl p-4' />
            <h1 className='text-white lg:text-8xl text-4xl  '>Trust The Process</h1>

            <div className="buttons flex flex-row flex-wrap justify-center items-center w-full">
                <img src={twitter} alt="" className='w-52 rounded-2xl p-4' />
                <img src={buy} alt="" className='w-52 rounded-2xl p-4' />
                <img src={chart} alt="" className='w-52 rounded-2xl p-4' />
                <img src={telegram} alt="" className='w-52 rounded-2xl p-4' />
            </div>

        </div>
    )
}

export default Home