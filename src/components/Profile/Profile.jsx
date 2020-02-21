import React, {useEffect} from 'react';
import Health from '../Health/Health';
import { Field, reduxForm } from 'redux-form';
import {Input} from './../../utils/FromControl';
import {required} from './../../utils/validator';

const MachineNameForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <Field name="machine_n" 
                type="text" 
                className="form-control" 
                component={Input} 
                validate={[required]} 
                placeholder="Machine" />
                <button className="btn btn-primary float-right"> Submit </button>
            </form>
        </div>
    )
}

const MachineNameReduxForm = reduxForm({form: 'machine_name'})(MachineNameForm);


const Profile = (props) => {
    
   useEffect (() => {
    const ws = new WebSocket('ws://localhost:1337');
    ws.onopen = () => {
       console.log('connected')
   }
    ws.onmessage = (e) => {
        const message = JSON.parse(e.data)
        if (message.id == props.machineId) {
            props.setHealthUpdateOne(message.health)
        }
        }
   }, [])

    const pushOnServ = (formData) => {
    console.log(formData)
    props.updateMachineName(props.machineId, formData.machine_n)
    }

    return (
        <div className="profile-container">
            <div>
                <h2>{props.profile.name}</h2>
                <h3>Update Device</h3>

                Name:
                <div >
                    <MachineNameReduxForm onSubmit={pushOnServ} />
                </div>
            </div>

            <div className="col-md-6">
                <Health health={props.profile.health} 
                numHealth={props.profile.health}/>
                <h3 className="mt30">Stats</h3>
                IP Address: {props.profile.ip_address}
                
            </div>

        </div>
    )
}

export default Profile;