import {machinesAPI} from './../api/api';
import {reset} from 'redux-form';

const SET_ALL_MACHINES = 'SET_ALL_MACHINES';
const SET_MACHINE_PROFILE = 'SET_MACHINE_PROFILE';
const HEALTH_UPDATE_ALL = 'HEALTH_UPDATE_ALL';
const HEALTH_UPDATE_ONE = 'HEALTH_UPDATE_ONE';
const NAME_UPDATE_ONE = 'NAME_UPDATE_ONE';

let initialState = {
    machinesInfo: [
        { id: 4, name: "Machine0", ip_address: "192.98.11.10", health: 100 },
        { id: 5, name: "Machine1", ip_address: "192.98.11.12", health: 75 },
        { id: 6, name: "Machine2", ip_address: "192.98.11.15", health: 50 },
        { id: 7, name: "Machine3", ip_address: "192.98.11.20", health: 25 },
    ],
    profile: {
        id: null,
        name: null,
        ip_address: null,
        health: null
    },
}

const machinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_MACHINES: {
            return {
                ...state,
                machinesInfo: action.param }
        }
        case SET_MACHINE_PROFILE: {
            return {...state, profile: action.profile}
        }
        case HEALTH_UPDATE_ALL: {
            return {...state, machinesInfo: state.machinesInfo.map(u => {
                if (u.id === action.message.id) {
                  return {...u, health: action.message.health}
                }
                return u;
            })}
        }
        case HEALTH_UPDATE_ONE: {
            return {...state, profile: {...state.profile, health: action.health}}
        }
        case NAME_UPDATE_ONE: {
            return {...state, profile: {...state.profile, name: action.name}}
        }
        default: return state;
}}

export const setAllMachines = (param) => ({ type: SET_ALL_MACHINES, param });
export const setMachineProfile = (profile) => ({type: SET_MACHINE_PROFILE, profile});
export const setHealthUpdateAll = (message) => ({ type: HEALTH_UPDATE_ALL, message });
export const setHealthUpdateOne = (health) => ({ type: HEALTH_UPDATE_ONE, health });
export const setNameUpdateOne = (name) => ({ type: NAME_UPDATE_ONE, name });

export const getAllMachinesInfo = () => async (dispatch) => {
    try {
        let response = await machinesAPI.getAllMachines()
        dispatch(setAllMachines(response.data))
    } catch (error) {}
};

export const getMachineProfile = (machineId) => async (dispatch) => {
    let response = await machinesAPI.getMachineInfo(machineId)
      dispatch(setMachineProfile(response.data))
};

export const updateMachineName = (machineId, newName) => async (dispatch) => {
    let response = await machinesAPI.updateMachineName(machineId, newName)
      if (response.status === 200) {
        dispatch(setNameUpdateOne(response.data.name))
        dispatch(reset('machine_name'))
      }
  };

export default machinesReducer;