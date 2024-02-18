import { Input } from 'antd';
import data from './data';
import TabList from './TabList';
export default function Contact(props) {

    return (
        <div className='contact-container'>
            <Input placeholder='People, Groups and Messages' />
            <TabList item={data} click={props.click} />
        </div>
    )
}
