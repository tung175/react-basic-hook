import React from "react";
import { useState, useEffect } from "react";
class CountDown extends React.Component{
    timer = null
    state = {
        count: 5 
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     console.log("me");
        // }, 1000)
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count -1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, pervState) {
        if (pervState.count !== this.state.count && this.state.count === 0) {
            if(this.timer){
                clearInterval(this.timer)
                this.props.onTimeUp()

            }
        } else {
            
        }
    }
    render() {
        return(
            <div>
                hello class componnent {this.state.count}
            </div>
        )
    }
}

const UseNewCountDown = (props) => {
    const [count1, setCount1] = useState(10)

    useEffect(() => {
        if (count1 === 0) {
            props.onTimeUp()
            return
        }
        let timer = setInterval(() => {
            console.log("run me");
            setCount1(count1 - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count1])
    return(
        <div>
           {count1} hooks
        </div>
    )
}

export {CountDown, UseNewCountDown}
