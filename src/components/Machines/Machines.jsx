import React, {useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {NavLink} from "react-router-dom";
import Health from '../Health/Health';

const Machines = (props) => {
	
	useEffect (() => {
		const ws = new WebSocket('ws://localhost:1337');
		ws.onopen = () => {
		   console.log('connected')
	   }
		ws.onmessage = (e) => {
			const message = JSON.parse(e.data)
			props.setHealthUpdateAll(message)
			}
	   }, [props.machinesInfo])

	let machinesElements = props.machines.map(el => 
		<MachineItem key={el.id} id={el.id} name={el.name} ip_address={el.ip_address} health={el.health} />)

return (
<div>
	<Table striped bordered hover responsive>
		<thead>
			<tr>
				<th>Name</th>
				<th>IP Address</th>
				<th>Health</th>
			</tr>
		</thead>
		<tbody>
			{machinesElements}
		</tbody>
	</Table>

</div>
);
}

export default Machines;

const MachineItem = (props) => {
	return (
		<tr>
			<td>
				<NavLink to={"/machines/" + props.id} >
					{props.name}
				</NavLink>
			</td>
			<td> {props.ip_address} </td>
			<td> <Health health={props.health} /> </td>
		</tr>
	)
}