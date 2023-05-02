import React from 'react'

function Base({children}) {
  return (
    <main className='cont font-semibold font-sans'>
        <section id='header ' className='max-w-full'>
            {/* Header */}
            <div className='flex justify-center items-center h-32  bg-[#fd7e14]'>
                <p>Hello Geeks!</p>
                </div>
        </section>
        {/* Children Section */}
        <section className='flex items-center justify-center min-h-screen bg-[#ffd8a8]'>{children}</section>
    </main>
  )
}

export default Base