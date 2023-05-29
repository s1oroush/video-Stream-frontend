import logo from './logo.svg';
import './App.css';
import {Component} from "react";

class App extends Component {
    state = {
        clients: []
    };


    async componentDidMount() {
        const videoDiv = document.querySelector('#video-player');
        const videoScreen = document.querySelector('#video-screen');
        const name = window.location.pathname;
        videoScreen.src = `http://localhost:8083/video` + name;
        videoDiv.style.display = 'block';
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div id="video-player">
                        <video id="video-screen" width="720px" height="480px" controls></video>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
