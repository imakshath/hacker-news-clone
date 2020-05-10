import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider as ReduxProvider } from 'react-redux';
// import our main App component
import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (store) => (req, res, next) => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            return res.status(404).end()
        }

        const html = ReactDOMServer.renderToString(
            <ReduxProvider store={store}>
                <App />
            </ReduxProvider>
        );

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}