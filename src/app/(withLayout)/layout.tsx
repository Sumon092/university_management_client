'use client'
import {useEffect,useState} from 'react'
import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { isLoggedIn } from "@/services/authService";
import { Layout } from "antd";
import { useRouter } from 'next/navigation';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading,setLoading]=useState<boolean>(false)
  const router=useRouter()
  const userLoggedIn=isLoggedIn();
  useEffect(()=>{
if(!userLoggedIn){
  router.push('/login')
}
setLoading(true)
  },[router,userLoggedIn])
if(!loading){
  <p>Loading....</p>
}
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
