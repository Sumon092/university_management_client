import {  Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from '@/services/authService';
import { authKey } from '@/constants/authKey';
import { useRouter } from 'next/navigation';
const { Header:AntHeader } = Layout;
const Header = () => {
    const router=useRouter()
    const logout=()=>{
        removeUserInfo(authKey)
        router.push('/login')
    }
    const items:MenuProps['items']=[{
        key:'0',
        label:<Button onClick={logout} type='text' danger>logout</Button>
    }]
    return <AntHeader style={{background:'#fff'}}>
        <Row justify='end' align='middle' style={{height:'100%'}}>
            <Dropdown menu={{items}}>
                <a>
                    <Space wrap size={16}>
                        <Avatar size='large' icon={<UserOutlined/>}></Avatar>
                    </Space>
                </a>
            </Dropdown>
        </Row>
    </AntHeader>
};

export default Header;