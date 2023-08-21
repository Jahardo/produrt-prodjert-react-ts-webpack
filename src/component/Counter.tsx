import React, {useState} from 'react';
import classes from  "./Counter.module.scss";
export const Counter = () => {
    const [count,setCount] = useState(0)
    return (
        <div >
            <h1 className={classes.h1}>{count}</h1>
            <button
                className={classes.button}
                onClick={()=>{setCount(prevState => prevState+1)}}
            >increase</button>
            <button
                className={classes.button}
                onClick={()=>{setCount(prevState => prevState-1)}}
            >decrease</button>
            <div className={classes.par}>
                <h1 className={classes.par}>Laalal</h1>
            </div>
        </div>
    );
};

