"use client";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBredCrumb";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const base='admin'
  return <Content style={{ minHeight: "100vh" }}>
    <UMBreadCrumb items={[
      {
        label:`${base}`,
        link:`/${base}`
      },
      {
        label:`student`,
        link:`/${base}/student`
      },
    ]}></UMBreadCrumb>
    {children}
    </Content>;
};

export default Contents;
