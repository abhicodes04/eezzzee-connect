// src/pages/superadmin/ManageVendor.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ManageVendor = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>🛍 Manage Vendors</CardTitle>
      </CardHeader>
      <CardContent>
        <p>List, approve, or suspend vendors here.</p>
      </CardContent>
    </Card>
  );
};

export default ManageVendor;
