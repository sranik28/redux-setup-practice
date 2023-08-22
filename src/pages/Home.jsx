import { useSelector, useDispatch } from "react-redux";
import { Decrement , Increment, incrementByAmount } from "../redux/features/counter/counterSlice";


const Home = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="mt-20 text-3xl text-center">
            <button onClick={()=>dispatch(incrementByAmount(5))}>incrementByAmount 5</button><br />
            <button onClick={()=>dispatch(Increment())}>Increment</button>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(Decrement ())}>decrement</button>
        </div>
    );
};

export default Home;