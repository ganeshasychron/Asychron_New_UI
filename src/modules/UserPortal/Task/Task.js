import React, { useState } from 'react';
import '../../../shared/CSS/FormStyles.css';
import styles from './task.module.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash";
import * as services from "../../../services/services";

const Task = () => {

	const [state, setState] = useState({})
	var Data = [];

	React.useEffect(() => {
		getUsersData();
	}, []);

	async function getUsersData() {
		services.getService("tasks").then((res) => {
			Data = res.data.Task;
			const Status1 = Data.filter(data => data.status === "TO DO");
			const Status2 = Data.filter(data => data.status === "IN DEVELOPMENT");
			const Status3 = Data.filter(data => data.status === "TECHNICAL REVIEW");
			const Status4 = Data.filter(data => data.status === "DEPLOYMENT");

			setState({
				"TO DO": {
					title: "TO DO",
					status: "TO DO",
					items: Status1
				},
				"IN DEVELOPMENT": {
					title: "IN DEVELOPMENT",
					status: "IN DEVELOPMENT",
					items: Status2
				},
				"TECHNICAL REVIEW": {
					title: "TECHNICAL REVIEW",
					status: "TECHNICAL REVIEW",
					items: Status3
				},
				"DEPLOYMENT": {
					title: "DEPLOYMENT",
					status: "DEPLOYMENT",
					items: Status4
				},
			})
		});
	}

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) {
			return
		}
		if (destination.index === source.index && destination.droppableId === source.droppableId) {
			return
		}
		const itemCopy = { ...state[source.droppableId].items[source.index] }
		setState(prev => {
			prev = { ...prev }
			prev[source.droppableId].items.splice(source.index, 1)
			prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
			return prev
		})

		const data = { status: destination.droppableId }
		console.log('itemcopy', itemCopy._id);

		services.patchService("tasks", itemCopy._id, data).then((res) => {
			console.log(res.data);
			getUsersData();
		});
	}

	return (
		<div className="jumbotron jumbo-form">
			<h5 className="page-heading">My Task</h5>
			<hr className="hr-line" />
			<div className="text-center center" >
				<div id={[styles.row]} className="row row-cols-1 row-cols-md-4">
					<DragDropContext onDragEnd={handleDragEnd} >
						{_.map(state, (data, key) => {
							return (
								<div className={[styles.col]}>
									<div className={[styles.card, "h-100"].join(' ')}>
										<div className={styles['card-body']}>
											<div className="col-sm">
												<h6>{data.title}</h6>
											</div>
											<div key={key} className={styles['card-body']}>
												<Droppable droppableId={key}>
													{(provided) => {
														return (
															<div ref={provided.innerRef}
																{...provided.droppableProps}
																className={styles['card-body']}>
																{data.items.map((el, index) => {
																	return (
																		<Draggable key={el._id} index={index} draggableId={el._id}>
																			{(provided) => {
																				return (
																					<div className={[styles.SubBox]}
																						ref={provided.innerRef}
																						{...provided.draggableProps}
																						{...provided.dragHandleProps} >
																						<div className={styles.TaskContent}>
																							<div> Title:-{el.title}  </div>
																							<div> Due On:-{el.dueDate}   </div>
																							<div> Priority:-{el.priority} </div>
																						</div>
																					</div>
																				)
																			}
																			}
																		</Draggable>
																	)
																})}
																{provided.placeholder}
															</div>
														)
													}}
												</Droppable>
											</div>
										</div>
									</div>
								 </div>
							)
						})}
					</DragDropContext>
				</div>
			</div>
		</div>
	)
}
export default Task;
