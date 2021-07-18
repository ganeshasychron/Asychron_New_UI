import React from 'react';
import { Row} from 'react-bootstrap';
import '../../../../shared/CSS/FormStyles.css';
import '../Polls.css';
import Bar from './Bar';
import Pie from './Pie';

const Display = (props) =>{
    if (props.value) {
        return <Bar/>
    }
    return <Pie/>
}

class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: true }
    }
 
    handleClick = () => {
        this.setState({
            value: !this.state.value
        });
    }
    render() {
        return (
            <>
                <div className="col-sm">
                    <Row>
                        <div id="LabelArea" className="form-group ">
                            <label id="FirstLabelIdBar" for="inputdegree" className="col-form-label"> select chart type  </label>
                            <div className="SecondLabelBar">
                                <select id='SecondLabelId' className='select_option' onChange={this.handleClick} >
                                    <option selected disabled className="option"> Select chart Type  </option>
                                    <option> Pie Chart</option>
                                    <option selected> Bar Chart</option>
                            
                                </select>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className='leavesdashboard1'>
                    <Display value={this.state.value} />
                </div>
            </>
        );
    }
}
export default Select;
