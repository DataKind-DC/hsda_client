import React from 'react'
import style from './modalStyles.css'


export default class Modal extends React.Component{
    constructor(props){
        super(props)
    }

    showData = (innerData) => {
        return(
            <div>{innerData}</div>
        );
     }

    render(){
        const {
            data,
            onCloseRequest,
        } = this.props;

        let innerData = Object.keys(data).map(key => {
            return this.showData(data[key]);
        });

        return (
            <div >
                <div>
                    <div>
                        {"Hello World"}
                    </div>
                </div>

                <button type='button' onClick={onCloseRequest}/>
            </div>
        );
        
    }
}