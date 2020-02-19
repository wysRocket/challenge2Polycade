import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Machines from './Machines';
import {getAllMachinesInfo, setHealthUpdateAll} from './../../redux/machines-reducer';

class MachinesContainer extends PureComponent {
    
    componentDidMount() {
        this.props.getAllMachinesInfo();
    }

    render () {
        return (
            <Machines machines={this.props.machines}
            setHealthUpdateAll={this.props.setHealthUpdateAll}/>
        )
    }
}

const mapStateToProps = (state) =>({
    machines: state.machines.machinesInfo,
})

export default compose (
    connect (mapStateToProps, {getAllMachinesInfo, setHealthUpdateAll})
) (MachinesContainer)