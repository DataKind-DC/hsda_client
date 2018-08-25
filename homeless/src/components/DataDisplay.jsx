import React from 'react'
import SortableTree from 'react-sortable-tree';
import { connect } from 'react-redux'
import Modal from './Modal'


const rowStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px'
}
const tableStyle = {
    fontFamily: 'arial, sans-serif',
    borderCollapse: 'collapse',
    width: '100%'
}
class DataDisplay extends React.Component{

    constructor(props){
        super(props)
        this.state = {Modal: <div/>, showModal: false};
    }

    handleModalToggle(Modal=undefined){
        if(Modal){
            this.setState({Modal: Modal, showModal: true});
        }else{
            this.setState({showModal: !this.state.showModal});
        }
    }

    cell = (org, headers) => {
        let cell = headers.map(header => {
            let child = typeof org[header] === 'string' 
            ? org[header] 
        : (org[header] === null ? 'Null' : "Object")//<button onClick={() => this.handleModalToggle(<Modal data={org[header]} onCloseRequest={this.handleModalToggle.bind(this)}/>)}>{typeof org[header]}</button>);
            

            return(
                <td key={org.id+header} style={rowStyle}>{child}</td>
            );
        });
        return cell
    }

    row = (org=0, headers=0, col=1) => {
        return (
            <tr id={org.id} key={org.organization_id}>
                {this.cell(org, headers)}
            </tr>
        );
    }

    headerComp = (header) => {
        return (
            <th style={rowStyle}>{header}</th>
        );
    }

    render(){

        const {
            showModal,
            Modal
        } = this.state;

        let headers = Object.getOwnPropertyNames(this.props.orgs.organizations[0]);
        let loadHeaders = headers.map(header => {
            return this.headerComp(header);
        });
        let orgList = Object.keys(this.props.orgs.organizations).map( key => {
            let org = this.props.orgs.organizations[key]
            return this.row(org, headers)
        });

        return showModal ? Modal : (
            <div style={{ height: 400 }}>
                <table style={tableStyle}>
                   <tbody>
                        <tr>
                            {loadHeaders}
                        </tr>
                        {orgList}
                   </tbody>
                </table>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return {
        orgs: state
    };
}

const mapDispatchToProps = {
    //Nothing right now
}

export default connect(mapStatetoProps, mapDispatchToProps)(DataDisplay)
