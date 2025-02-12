import { useEffect, useState } from 'react'
import DecryptedText from '../components/decryptTextComponent'
import CardWithButtons from '../components/animatedCard'
import { loadingMessage } from '../utils/constants'
import SplitText from '../components/titleComponent'

function Loading() {

    const [isDecrypted, setIsDecrypted] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsDecrypted(true)
        }, 25000) //25000
    }, [])

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="relative h-screen w-full bg-slate-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] flex flex-col items-center justify-center">
                {!isDecrypted && (
                    <div className='mx-8 lg:mt-0 md:w-[50%] '>
                        <div className="h-16 overflow-hidden relative ">
                            <img
                                src="./dog.gif"
                                alt="Perrito corriendo"
                                className="size-16 md:size-23 object-cover rounded-lg absolute animate-move"
                            />
                        </div>
                        {/* <DecryptedText
                            text={loadingMessage}
                            speed={80}
                            maxIterations={1}
                            useOriginalCharsOnly="true"
                            className="relative mt-10 text-white text-xl lg:text-2xl font-semibold w-full max-w-lg items-center text-center text-pretty font-Minion"
                            parentClassName="mt-10 all-letters text-white text-2xl font-semibold text-pretty w-full max-w-lg font-Minion"
                            encryptedClassName="encrypted"
                            sequential="true"
                            revealDirection="start"
                            animateOn="view"
                        /> */}

                        <SplitText
                            text= {loadingMessage}
                            className="relative mt-10 text-white text-xl lg:text-2xl font-semibold w-full max-w-lg items-center text-center text-pretty font-Minion"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            onLetterAnimationComplete={handleAnimationComplete}
                        />

                    </div>
                )
                }
                {isDecrypted && (
                    <CardWithButtons />
                )}

            </div>
        </div >
    )
}

export default Loading