
import React, { useState } from 'react';
import '../../../shared/CSS/FormStyles.css';
import styles from './task.module.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import _ from "lodash"; /* npm lodash */
import {v4} from "uuid"; /* npm uuid*/

const item = {
	id: v4(),
	name: "Task 1"
}
const item2 = {
	id: v4(),
	name: "Task 2"
}
const item3 = {
	id: v4(),
	name: "Task 3"
}
const item4 = {
	id: v4(),
	name: "Task 4"
}
const item5 = {
	id: v4(),
	name: "Task 5"
}
const item6 = {
	id: v4(),
	name: "Task 6"
}

const Task = () => {
	
	const [state, setState] = useState({
		"todo": {
			title: "To do",
			items: [item, item2, item3]
		},
		"in-progress": {
			title: "In Development",
			items: [item4]
		},
		"done": {
			title: "Technical Review",
			items: [item5]
		},
		"do": {
			title: "Deployment",
			items: [item6]
		}
	})

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
	}

	return (
		<div className="jumbotron jumbo-form">
			<h5 className="page-heading">My Task</h5>
			<hr className="hr-line" />
			<div className="text-center center" >
				<div className={styles.BoxArea} id="chart">

					<DragDropContext onDragEnd={handleDragEnd}>
						{_.map(state, (data, key) => {
							return (

								<div className={styles.card}>
									<div className={styles['card-body']}>
										<div className="col-sm">
											<h6>{data.title}</h6>
										</div>

										<div key={key} className={styles['card-body1']}>

											<Droppable droppableId={key}>
												{(provided) => {
													
													return (
														<div ref={provided.innerRef}
															{...provided.droppableProps}
															className={styles['card-body2']} >

															{data.items.map((el, index) => {
																return (
																	<Draggable key={el.id} index={index} draggableId={el.id}>
																		{(provided) => {
																			
																			return (
																				<div className={styles.SubBox}
																					ref={provided.innerRef}
																					{...provided.draggableProps}
																					{...provided.dragHandleProps} >
																					{el.name}
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
							)
						})}
					</DragDropContext>
				</div>
			</div>
		</div>
	)
}
export default Task;
