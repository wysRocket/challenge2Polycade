import React, {PureComponent} from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile';
import {getMachineProfile, setHealthUpdateOne, updateMachineName} from './../../redux/machines-reducer';

class ProfileContainer extends PureComponent {
    
    componentDidMount() {
        let machineId = this.props.match.params.machineId;
        this.props.getMachineProfile(machineId)
    }

    render () {
        return (
            <Profile profile={this.props.profile} 
            machineId = {this.props.match.params.machineId}
            setHealthUpdateOne={this.props.setHealthUpdateOne}
            updateMachineName={this.props.updateMachineName}/>
        )
    }
}

const mapStateToProps = (state) =>({
    profile: state.machines.profile,
})

export default compose (
    withRouter,
    connect (mapStateToProps, {getMachineProfile, setHealthUpdateOne, updateMachineName})
) (ProfileContainer)