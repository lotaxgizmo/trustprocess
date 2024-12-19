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
            <p className='text-white lg:text-2xl text-sm text-wrap '>CA: r4gfQGTgBNzL5W7Zgc872UK2Bxze3SvB3u</p>

            <div className="buttons flex flex-row flex-wrap justify-center items-center w-full">
                <a href="https://firstledger.net/token/r4gfQGTgBNzL5W7Zgc872UK2Bxze3SvB3u/5452555354000000000000000000000000000000" target="_blank" rel="noreferrer">
                    <img src={buy} alt="" className='lg:w-52 w-40 rounded-2xl p-4' />
                </a>
                <a href="https://x.com/trustonxrp" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" className='lg:w-52 w-40 rounded-2xl p-4' />
                </a>
                <a href="https://dexscreener.com/xrpl/5452555354000000000000000000000000000000.r4gfQGTgBNzL5W7Zgc872UK2Bxze3SvB3u_xrp" target="_blank" rel="noreferrer">
                    <img src={chart} alt="" className='lg:w-52 w-40 rounded-2xl p-4' />
                </a>
                <a href="https://t.me/trustxrpcto" target="_blank" rel="noreferrer">
                    <img src={telegram} alt="" className='lg:w-52 w-40 rounded-2xl p-4' />
                </a>
            </div>

        </div>
    )
}

export default Home