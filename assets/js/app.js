/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
const { Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Content>
                    <div>Content</div>
                </Content>
            </Layout>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));