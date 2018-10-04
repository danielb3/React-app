import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
            content: "Content from state..."
         }
   
    }
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 60,
            color: 'blue'
        }
        return (
            <div>
            <h1 style = {myStyle}>Hello World</h1>
            <h2>Contents</h2>
            <p data-myattribute = "somevalue" >This is stuff</p>
            <h1>{1 + 1}</h1>
            <h1>{i == 1 ? 'true' : 'false'}</h1>
            <Header/>
            <Content/>
            <List/>
            {/*this is another comment*/}
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <hr/>
            <h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>passing components</h1>
            </div>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <p>passing components</p>
            </div>
        )
    }
}

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                },
                {
                    "id": 2,
                    "name": "Baz",
                    "age": "40"
                }
            ]
        }
    }
    
    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

ReactDOM.render(
    <App headerProp = "this is header props" contentProp = "this is content props"/>,
    document.getElementById('root')
  );