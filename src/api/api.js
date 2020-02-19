import * as axios from 'axios';

const instance = axios.create ({
    baseURL: 'http://localhost:8080/'

});

export const machinesAPI = {
    getAllMachines () {
        return instance.get(`machines`)
    },
    getMachineInfo (machineId) {
        return instance.get(`machines/` + machineId)
    },
    updateMachineName (machineId, newName) {
        return instance.put(`machine/` + machineId, {name: newName})
    }     
}