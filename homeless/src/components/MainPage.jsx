import React from 'react'
import axios from 'axios'
import { getData, init } from '../actions/apiActions'
import { connect } from 'react-redux'
import DataDisplay from './DataDisplay';

class MainPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {showData: false, showError: false}
    }

    handleClick = event =>{

        var loadDataTree = false
        axios.get('http://miami.open.211.hsda.api.adopta.agency/services/full/')
        .then(response => {
            this.props.downloadData(response.data);
            if(response.status === 200){
                this.setState({
                    ...this.state,
                    showData: true
                });
            }else{
                this.setState({
                    ...this.state,
                    showError: true
                });
            }
            console.log('orgs', this.props.organizations)
            console.log('state', this.state)

        })
        .catch(error => console.log(error))

    console.log('running axios', this.state)
        return;
    }

    loadButton = () => {
        return(
            <div>
                <button onClick={this.handleClick}>Load Data</button>
            </div>
        );
    }

    render(){
        return (
            <div>
                {this.state.showData ? <DataDisplay/> : this.loadButton()}
            </div>
        );
        
    }
}

function mapStateToProps(state){
    return {
        organizations: state
    }
}

const mapDispatchToProps = {
    downloadData: getData,
    init: init
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)