"use client"

import UMBreadCrumb from '@/components/ui/UMBredCrumb';
import { getUserInfo } from '@/services/authService';
import React from 'react';

const ManageStudentPage = () => {
    const {role}=getUserInfo() as any;
    return (
        <div>
            <UMBreadCrumb items={[
      {
        label:`${role}`,
        link:`/${role}`
      },
      {
        label:`student`,
        link:`/${role}/student`
      },
    ]}></UMBreadCrumb>
        </div>
    );
};

export default ManageStudentPage;