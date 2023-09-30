import { Row, Space, Spin } from "antd";

const Loading = () => {
    return (
        <Row
        justify='center'
        align='middle'
        style={{
            height:'100vh'
        }}>
            <Space>
                <Spin tip="loading" size="large"></Spin>
            </Space>

        </Row>
    );
};

export default Loading;