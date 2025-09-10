// src/pages/superadmin/Overview.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Overview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📊 Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Quick stats and analytics for the platform.</p>
      </CardContent>
    </Card>
  );
};

export default Overview;
