import './App.css';
import Welcome from './components/welcome';

function App() {

  return (
    <>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] flex items-center justify-center"> */}
      {/* <Welcome /> */}
      {/* En Interestelar, aprendí que la curiosidad nos lleva más allá de las estrellas. ¿Te gustaría acompañarme en una aventura el Día de San Valentín y explorar algo nuevo juntos? */}
      {/* </div> */}
      <div className="relative h-screen w-full bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] flex items-center justify-center">
          <Welcome />
        </div>
      </div >

    </>
  )
}

export default App
