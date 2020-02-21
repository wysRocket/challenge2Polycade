import React from 'react';
import machinesReducer, {setHealthUpdateAll} from './machines-reducer';

test('health of the machine updated', () => {
    let action = setHealthUpdateAll({id: 4, health: 55})
    let state = {
        machinesInfo: [
            { id: 4, name: "Machine0", ip_address: "192.98.11.10", health: 100 },
            { id: 5, name: "Machine1", ip_address: "192.98.11.12", health: 75 },
            { id: 6, name: "Machine2", ip_address: "192.98.11.15", health: 50 },
            { id: 7, name: "Machine3", ip_address: "192.98.11.20", health: 25 },
        ]
    }
    let newState = machinesReducer(state, action);

  expect(newState.machinesInfo[0].health).toBe(55);
});