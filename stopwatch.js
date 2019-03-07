import React, { Component } from 'react';
import './stopwatch.css';



class StopWatch extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            stopWatchOn: false,
            interval: null
        }
    }
    stopWatch=()=>{
        if(this.state.count > -1){
            this.setState({
                count: this.state.count + 1
            })
        }
    }
    startButtonClicked = e=>{
        if (!this.state.stopWatchOn){
            let interval = setInterval(this.stopWatch, 1);
            this.setState({
                stopWatchOn:true
            })
            this.setState({
                interval: interval
            })
        }
    }
    
    submitButtonClicked = e =>{
        this.setState({
            stopWatchOn : false
        })
        clearInterval(this.state.interval);
    }
    stopButtonClicked = e =>{
        this.setState({
            stopWatchOn : false
        })
        clearInterval(this.state.interval);
    }
    resetButtonClicked = e =>{
        this.setState({
            stopWatchOn : false
        })
        clearInterval(this.state.interval);
    }

    render(){
        let count = this.state.count;
        let hours = Math.floor(this.state.count / 3600)
        let minutes = Math.floor((count-hours*3600) / 60)
        let seconds = Math.floor(count-hours*3600 - minutes*60)
        console.log(count + " count");
        return(
        <div className="stopwatchContainer">
            <h1 className="TITLE">STOPwatch</h1>
            <div className="bottom-button-container">
                <div className="button-container">
                        <div className="start-button">
                            <button className="start-btn" onClick={this.startButtonClicked}>GO!</button>
                        </div>
                </div>
                <div className="button-container">
                    <div className="submit-button">
                        <button className="submit-btn" onClick={this.submitButtonClicked}>submit</button>
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
                </div>
                <div className="top-button-container">
                    <div className="button-container">
                        <div className="reset-button">
                            <button className="reset-btn" onClick={this.resetButtonClicked}>reset</button>
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