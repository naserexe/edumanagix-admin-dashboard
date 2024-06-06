import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddCourseTable from "@/components/Tables/AddCourseTable";

export const metadata: Metadata = {
  title: "EduManagix",
  description: "Manage educational institute",
};

const ManageModerator = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Course to Student" />
      <div className="flex flex-col gap-10">
        <AddCourseTable />
      </div>
    </DefaultLayout>
  );
};

export default ManageModerator;
