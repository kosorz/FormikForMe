import React from 'react';
import './App.css';
import CustomForm from "./components/CustomForm";

const App = () => {
    const [errorState, setErrorState] = React.useState(undefined);

    console.log(errorState);

    return <CustomForm updateParent={setErrorState}/>
}

export default App;
