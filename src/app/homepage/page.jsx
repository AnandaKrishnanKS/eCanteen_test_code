import React from 'react'

const Homepage = () => {



  return (
    <main className="pt-20">
        <div className="flex justify-center mb-8">
            <h1 className='text-lg font-bold'>Canteen</h1>
        </div>

        {/* sample code for reusable component */}
        
        <div className='my-2 bg-slate-800 rounded-md w-1/5 me-auto ms-auto'>
            <div className="flex justify-center">
                <img
                    src="g"
                    alt="food Img"
                    className="h-16 w-16 bg-white rounded-md m-1"
                    />
                <div>
                    <p className='px-4 pt-3'>parippuvada</p>
                    <p className='px-4'>15$</p>
                </div>
                
                <button className='flex justify-center items-center ms-3'>
                <p>&minus;</p>
                </button>
                <div className='flex justify-center items-center '>
                    <div className=' w-8 h-8 m-3 text-center bg-slate-50 rounded-lg'>
                            <p className=' text-black text-center pt-1'>1</p>
                    </div>
                </div>
                <button className='flex justify-center items-center'>
                <p>&#43;</p>
                </button>
                
                </div>
            </div>
    </main>
  )
}

export default Homepage