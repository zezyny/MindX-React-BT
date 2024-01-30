import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Checkbox } from 'antd';
import { Button } from 'react-bootstrap';
function TabList(props) {
    const renderAllTask = () => {
        return props.item.map((it) => {
            return <div key={it.id} className={!it.taskStat ? 'taskRenderList' : 'change-background'}>
                <Checkbox onChange={() => { props.change(it.id) }} checked={it.taskStat} />
                <p>{it.taskName}</p>
                <Button variant="outline-danger" size="sm" onClick={props.del} id={it.id}>Delete</Button>
            </div>
        })
    }
    const renderActiveTask = () => {
        let all = props.item.filter((it) => {
            return it.taskStat == false
        })
        return all.map((it) => {
            return <div key={it.id} className='taskRenderList'>
                <Checkbox onChange={() => { props.change(it.id) }} checked={it.taskStat} />
                <p>{it.taskName}</p>
                <Button variant="outline-danger" size="sm" onClick={props.del} id={it.id}>Delete</Button>
            </div>
        })
    }
    const renderCompletedTask = () => {
        let completed = props.item.filter((it) => {
            return it.taskStat == true
        })
        return completed.map((it) => {
            return <div key={it.id} className='change-background'>
                <Checkbox onChange={() => { props.change(it.id) }} checked={it.taskStat} />
                <p>{it.taskName}</p>
                <Button variant="outline-danger" size="sm" onClick={props.del} id={it.id}>Delete</Button>
            </div>
        })
    }
    return (
        <Tabs
            defaultActiveKey="all"
            id="tab-list"
            className="mb-1"
        >
            <Tab eventKey="all" title="All">
                {renderAllTask()}
            </Tab>
            <Tab eventKey="active" title="Active">
                {renderActiveTask()}
            </Tab>
            <Tab eventKey="completed" title="Completed">
                {renderCompletedTask()}
            </Tab>
        </Tabs>
    );
}

export default TabList;