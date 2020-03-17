import React from 'react';
import './App.css';
import CustomForm from "./components/Verification1";

const App = () => {
    const [errorState, setErrorState] = React.useState(false);

    return (
        <>
            {errorState ? 'Form is currently valid' : 'Form is currently invalid'}
            <CustomForm updateParent={setErrorState}/>
        </>
    )
}

export default App;
