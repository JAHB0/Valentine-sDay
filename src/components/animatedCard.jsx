import React, { useEffect, useRef, useState } from "react";
import { noBtn } from "../utils/constants";

const CardWithButtons = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showNoResponse, setShowNoResponse] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [isNoButtonAbsolute, setIsNoButtonAbsolute] = useState(false);
    const [attempt, setAttempt] = useState(0);

    //Referencia del contenedor
    const containerRef = useRef(null)
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const container = containerRef.current;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setSize({ width, height });
            }
        });

        if (container) {
            resizeObserver.observe(container);
        }

        return () => {
            if (container) {
                resizeObserver.unobserve(container);
            }
        };
    }, []);

    const moveNoButton = () => {
        if (containerRef.current) {
            const maxX = size.width - 200; // Resta el ancho del botón
            const maxY = size.height - 100; // Resta el alto del botón

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            setNoButtonPosition({ x, y });
            setIsNoButtonAbsolute(true);
            setAttempt(prev => {
                const newAttempt = prev + 1;
                if (newAttempt >= 3) {
                    setShowNoResponse(true);
                }
                return newAttempt;
            });

        }
    };

    const handleYesClick = () => {
        setShowConfirmation(true);
    };

    return (
        <div className="bg-transparent p-8 rounded-lg shadow-lg text-center text-white">
            {!showConfirmation && !showNoResponse ? (
                <>
                    <div class="relative max-w-sm border border-gray-700 rounded-lg shadow-lg bg-gray-900/50 backdrop-blur-md overflow-hidden">
                        <a href="#">
                            <img
                                src="./patrickLove.gif"
                                alt="Corazon"
                                className="rounded-t-lg w-full"
                            />
                        </a>
                        <div class="p-5 m-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-Minion">¿Me darías el honor de ser mi Valentín?</h5>
                            </a>
                        </div>
                        <div className="flex m-10 p-10 justify-around " ref={containerRef}>
                            <button
                                onClick={handleYesClick}
                                className="mx-5 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 font-Minion"
                            >
                                Sí
                            </button>
                            <button
                                onClick={moveNoButton}
                                style={{
                                    position: isNoButtonAbsolute ? "relative" : "static",
                                    left: isNoButtonAbsolute ? `${noButtonPosition.x}px` : "auto",
                                    top: isNoButtonAbsolute ? `${noButtonPosition.y}px` : "auto",
                                }}
                                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 font-Minion"
                            >
                                {noBtn[attempt]}
                            </button>
                        </div>
                    </div>

                </>
            ) : (
                showNoResponse ? (
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex items-center justify-center p-5">
                            <img
                                src="./sad.gif"
                                alt="Sad bird"
                                className="size-12 lg:size-20 "
                            />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-Minion">¡Esta bien!</h5>
                            </a>

                            <div class="flex flex-col items-center justify-between">
                                <p className="text-lg mt-2 font-Minion">No siempre se obtiene lo que se quiere :( </p>
                            </div>
                        </div>
                    </div>

                ) : (
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#" className="flex items-center justify-center p-5">
                            <img
                                src="./heart.gif"
                                alt="Corazon"
                                className="size-12 lg:size-20 "
                            />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white font-Minion">¡Genial!</h5>
                            </a>

                            <div class="flex flex-col items-center justify-between">
                                <p className="text-lg mt-2 font-Minion">Nos vemos el Día de San Valentín. 💖</p>
                                <a href="src/assets/files/jahbo.pdf" download class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Da un click Aqui
                                </a>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default CardWithButtons;