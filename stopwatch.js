import React, { Component } from 'react';
import './stopwatch.css';

class StopWatch extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            milli: 0,
            milliWatchOn: false,
            stopWatchOn: false,
            interval: null
        }
    }
    stopWatch=()=>{
        if(this.state.count > -1){
            this.setState({
                count: this.state.count + 1,
            })
        }
    }
    milliWatch=()=>{
        if(this.state.milli > -1){
            this.setState({
                milli: this.state.milli + 1,
            })
        }
    }
    startButtonClicked = e=>{
        if (!this.state.stopWatchOn){
            let interval = setInterval(this.stopWatch, 1000);
            let milliInterval = setInterval(this.milliWatch, 1);
            this.setState({
                stopWatchOn : true,
                milliWatchOn : true
            })
            this.setState({
                interval: interval,
                milliInterval: milliInterval
            })
        }
    }
    stopButtonClicked = e =>{
        this.setState({
            stopWatchOn : false,
            milliWatchOn : false,
        })
        clearInterval(this.state.interval);
        clearInterval(this.state.milliInterval);
    }
    logButtonClicked = e =>{
        this.setState({
            stopWatchOn : false,
            milliWatchOn : false,
        })
        clearInterval(this.state.interval);
        clearInterval(this.state.milliInterval);
    }
    resetButtonClicked = e =>{
        clearInterval(this.state.interval);
        clearInterval(this.state.milliInterval);
        this.setState({
            stopWatchOn : false,
            milliWatchOn : false,
            count : 0,
            milli : 0,
        })
        clearInterval(this.state.interval);
        clearInterval(this.state.milliInterval);
    }


    render(){
        let count = this.state.count;
        let hours = Math.floor(count / 3600);
        let minutes = Math.floor((count-hours*3600) / 60);
        let seconds = Math.floor(count-hours*3600 - minutes*60);
        let milli = this.state.milli;
        let milliseconds = milli & 100;
        console.log(milliseconds);
        console.log(count + " count");
        console.log(hours + " hours");
        console.log(minutes + " minutes");
        console.log(seconds + " seconds");
        return(
        <div className="stopwatchContainer">
            <h1 className="TITLE">STOPwatch</h1>
            <div className="bottom-button-container">
                <div className="button-container">
                        <div className="start-button">
                            <button className="start-btn" onClick={this.startButtonClicked}>START</button>
                        </div>
                </div>
                <div className="button-container">
                    <div className="log-button">
                        <button className="log-btn" onClick={this.logButtonClicked}>LOG</button>
                    </div>
                </div>
            </div>
                <div className="clock-container">
                    <div className="hours">{(hours < 10)
                        ?
                        `0${hours}`
                        :
                        hours}
                    </div>
                    <div className="minutes">{(minutes < 10)
                        ?
                        `:0${minutes}`
                        :
                        `:${minutes}`}
                    </div>
                    <div className="seconds">{(seconds < 10)
                        ?
                        `:0${seconds}`
                        :
                        `:${seconds}`}
                    </div>
                    <div className="milliseconds">{(milliseconds < 10)
                        ?
                        `0${milliseconds}`
                        :
                        `${milliseconds}`}
                    </div>
                </div>
                <div className="top-button-container">
                    <div className="button-container">
                        <div className="reset-button">
                            <button className="reset-btn" onClick={this.resetButtonClicked}>RESET</button>
                        </div>
                    </div>
                

                    <div className="button-container">
                        <div className="stop-button">
                            <button className="stop-btn" onClick={this.stopButtonClicked}>STOP</button>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
export default StopWatch;