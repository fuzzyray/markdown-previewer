import React from 'react';
import ReactDOM from 'react-dom';
/*
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import DOMPurify from 'dompurify';
*/

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                <h1>Markdown Previewer</h1>
                </header>
                <div>
                    <div>
                        <h2>Editor</h2>
                    </div>
                    <div>
                        <h2>Preview</h2>
                    </div>
                </div>
            </div>
        );
    };
}
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
