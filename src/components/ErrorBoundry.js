import React, { Component } from 'react';

class ErrorBoundry extends Component
{
    constructor()
    {
        super();
        this.state = {
            hasError: false
        }
    }

    // check if an error happened
    componentDidCatch(error, info)
    {
        this.setState({hasError: true});
    }

    render()
    {
        if (this.state.hasError)
        {
            return (
            <div>
                <h1>Oooops</h1>
                <h2 className="likeH1">😭</h2>
                <h3>An error occured</h3>
            </div>);
        }

        else
        {
            return this.props.children;
        }
    }
}

export default ErrorBoundry;