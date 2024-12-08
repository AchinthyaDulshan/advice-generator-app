import React, { useEffect, useState } from 'react'

const AdviceCard = () => {

    // create custom states to store data
    const [adviceNo, setAdviceNo] = useState(0);
    const [advice, setAdvice] = useState('.. Please wait ..');

    // create custom function to request data from api
    const getAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) {
                throw new Error("Error while fetching data..!");
            }

            const data = await response.json();
            setAdviceNo(data.slip.id);
            setAdvice(data.slip.advice);

        } catch (error) {
            setAdvice('Failed to fetch advice. Please try again.');
            console.error('Error fetching advice:', error);
        }
    }

    //add function to useEffect hook to get data when page loading
    useEffect(() => { getAdvice(); }, [])


    return (
        // main card start 
        <div className='bg-Dark-Grayish-Blue rounded-xl p-10  max-w-md shadow-xl relative mx-4 md:mx-0 transition-all duration-200 '>
            {/* advice no  */}
            <p className='text-Neon-Green text-xs uppercase tracking-[.35em] pb-5 text-center '>Advice #{adviceNo}</p>
            {/* advice text  */}
            <p className='text-[28px] text-Light-Cyan pb-5 text-center'>"{advice}"</p>
            {/* divider  */}
            {/* desktop  */}
            <img src="src/assets/pattern-divider-desktop.svg" className='mx-auto pb-5 hidden md:block' alt="divider" />
            {/* mobile  */}
            <img src="src/assets/pattern-divider-mobile.svg" className='mx-auto pb-5 md:hidden' alt="divider" />
            {/* bottom button  */}
            <button onClick={getAdvice} className='bg-Neon-Green rounded-full p-4 absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 hover:drop-shadow-neon-green transition-all duration-300'><img src="src/assets/icon-dice.svg" alt="dice" /></button>
        </div>
        // man card end 
    )
}

export default AdviceCard