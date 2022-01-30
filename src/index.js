import React from 'react';
import ReactDOM from 'react-dom';
import Home from    './components/Home';

class ReactComponent extends React.Component{
    render(){
        return(

            <div>
                <h1>Home Component </h1>
                <Home/>
            </div>
        );
    }
}

ReactDOM.render(<ReactComponent/>, document.getElementById("root"));
