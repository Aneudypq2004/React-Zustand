import { WhiteCard } from '../../components';
import { useBearStore } from '../../stores';


export const BearPage = () => {

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BlackBears />

        <PandaBears />

        <PolarBears />

        <BearDisplay />

      </div>

    </>
  );
};


function BlackBears() {

  const blackBears = useBearStore(state => state.blackBears);
  const IncreaseBlackBears = useBearStore(state => state.increaseBlackBears);

  return (

    <WhiteCard centered>

      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">

        <button onClick={() => IncreaseBlackBears(+1)}> +1</button>

        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>

        <button onClick={() => IncreaseBlackBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}


export const PolarBears = () => {

  const polarBears = useBearStore(state => state.polarBears);
  const IncreasepolarBears = useBearStore(state => state.increasePolarBears);

  return (
    <WhiteCard centered>

      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">

        <button onClick={() => IncreasepolarBears(+1)}> +1</button>

        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>

        <button onClick={() => IncreasepolarBears(-1)}>-1</button>

      </div>

    </WhiteCard>


  )
}

export const PandaBears = () => {

  const PandaBears = useBearStore(state => state.pandaBears);
  const IncreasePandaBears = useBearStore(state => state.increasePandaBears);
  return (
    <WhiteCard centered>
      <h2>Osos Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => IncreasePandaBears(+1)}> +1</button>

        <span className="text-3xl mx-2 lg:mx-10"> {PandaBears} </span>

        <button onClick={() => IncreasePandaBears(-1)}>-1</button>
      </div>

    </WhiteCard>
  )
}


export const BearDisplay = () => {

  const bears = useBearStore(state => state.bears);
  const addBear = useBearStore(state => state.AddBear);
  const clearBears = useBearStore(state => state.ClearBears);

  return(
    <WhiteCard>

      <div className="grid">

      <button onClick={addBear}>Add Bear</button>
      <button className='my-4' onClick={clearBears}>Clear</button>

      </div>

      <pre>
        {JSON.stringify(bears,null, 2)}
      </pre>
    </WhiteCard>
  )
}