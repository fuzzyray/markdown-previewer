import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser from 'react-html-parser';
import marked from 'marked';
import DOMPurify from 'dompurify';
import "./index.css";
import {Resizable} from "re-resizable";
import * as ReactDeviceDetect from 'react-device-detect';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

marked.setOptions({
    gfm: true,
    breaks: true,
    highlight: (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    }
});

const defaultText = "";

function DesktopPreviewer(props) {
    let markdownHtml = ReactHtmlParser(DOMPurify.sanitize(marked(props.markdownText)));

    return (
        <div className="desktop-container">
            <header className="desktop-header-container" >
                <h1>Markdown Previewer</h1>
            </header>
            <div className="desktop-content-container">
                <Resizable defaultSize={{width: "50%", height: "100%"}} minWidth="20%" maxWidth="80%"
                           style={{display: "flex", flexDirection: "column"}}
                           enable={{
                               top: false,
                               right: true,
                               bottom: false,
                               left: false,
                               topRight: false,
                               bottomRight: false,
                               bottomLeft: false,
                               topLeft: false
                           }}>
                    <h2 className="editor-header">Editor</h2>
                    <div className="desktop-editor-container">
                        <textarea
                            id="editor"
                            className="textarea"
                            defaultValue={props.markdownText}
                            onChange={(event) => props.onChange(event)}
                        />
                    </div>
                </Resizable>
                <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                    <h2 className="preview-header">Preview</h2>
                    <div id="preview" className="desktop-render-container">
                    {markdownHtml}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobilePreviewer(props) {
    let displayEditor;
    let displayPreview;
        let btnLabel;
            if (props.editMode) {
                btnLabel = "Preview";
                displayEditor = {display: "block"};
                displayPreview = {display: "none"};
            } else {
                btnLabel = "Edit";
                displayEditor = {display: "none"};
                displayPreview = {display: "block"};
            }
    let markdownHtml = ReactHtmlParser(DOMPurify.sanitize(marked(props.markdownText)));

    return (
            <div className="mobile-container">
                <header className="mobile-header-container">
                    <h1>Markdown Previewer</h1>
                </header>
                <div className="toggle-button-container">
                    <button className="btn btn-info btn-lg" onClick={() => props.onClick()}>
                        {btnLabel}
                    </button>
                </div>
                <div className="mobile-editor-container" style={displayEditor}>
                    <textarea
                        id="editor"
                        className="textarea"
                        defaultValue={props.markdownText}
                        onChange={(event) => props.onChange(event)}
                    />
                </div>
                <div id="preview" className="mobile-render-container" style={displayPreview}>
                    {markdownHtml}
                </div>
            </div>
        );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownText: defaultText,
            editMode: true,
        }
    }

    componentDidMount() {
        fetch("./default.md")
            .then(response => response.text())
            .then(text => {
                this.setState({markdownText: text});
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleClick() {
        this.setState({editMode: !this.state.editMode});
    }

    handleChange(event) {
        this.setState({markdownText: event.target.value});
    }

    render() {
        const mobileMode = !ReactDeviceDetect.isBrowser;
        if (mobileMode) {
            return (
                <MobilePreviewer
                    markdownText={this.state.markdownText}
                    editMode={this.state.editMode}
                    onClick={() => this.handleClick()}
                    onChange={(event) => this.handleChange(event)}
                />
            );
        } else {
            return (
                <DesktopPreviewer
                    markdownText={this.state.markdownText}
                    onChange={(event) => this.handleChange(event)}
                />
            );
        }
    }
}

console.log(ReactDeviceDetect.deviceDetect());
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

