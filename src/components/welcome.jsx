import { useState } from "react";
import SplitText from "./titleComponent";
import DecryptedText from "./decryptTextComponent";

export default function Welcome() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    const [showGif, setShowGif] = useState(false);

    const handleClick = () => {
        setShowGif(true);
    }

    return (
        // <div className='relative flex flex-col items-center text-center'>
        <div className="relative flex flex-col items-center text-center z-10 p-4">
            <SplitText
                text="Hola Mundo ⚡⚡⚡"
                className="text-8xl font-semibold text-white text-center mb-10 p-10"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />


            {!showGif && (

                <button className="mt-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-cyan-900 rounded-lg group bg-gradient-to-br
            from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white  
            focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                    onClick={handleClick}
                >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent dark:bg-pink-50 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        Clickea aqui
                    </span>
                </button>
            )}

            {/* Mostrar el GIF si showGif es true */}
            {showGif && (
                <>
                    <div className="w-80 h-16 overflow-hidden relative">
                        <img
                            src="./dog.gif"
                            alt="Perrito corriendo"
                            // className="size-12 object-cover rounded-lg"
                            className="size-20 object-cover rounded-lg absolute animate-move"
                        />
                    </div>

                    <DecryptedText
                        text="Aprendí que la curiosidad nos lleva más allá de las estrellas.
                        ¿Te gustaría acompañarme en una aventura el Día de San Valentín y explorar algo nuevo juntos?"
                        speed={150}
                        maxIterations={1}
                        useOriginalCharsOnly="true"
                        className="relative mt-10 text-white text-2xl font-semibold text-pretty"
                        parentClassName="all-letters text-white text-2xl font-semibold text-pretty"
                        encryptedClassName="encrypted"
                        sequential="true"
                        revealDirection="start"
                        animateOn="view"
                    />

                </>
            )}


        </div>
    )
};