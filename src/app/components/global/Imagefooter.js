import React from 'react'
function Imagefooter() {
    return (
        <footer className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center relative scroll-mt-32 py-8 transition-all duration-300 ease-in-out"
            style={{
                backgroundImage: "linear-gradient(to bottom, white, rgba(0, 0, 0, 0.1)), url('/footer/Main-Entrance.jpg')"
            }}
        ></footer>
    )
}

export default Imagefooter