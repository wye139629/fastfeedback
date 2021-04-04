import { useAuth } from 'lib/auth';
import fetcher from 'utils/fetcher';
import useSWR from 'swr';
import DashboardShell from 'components/DashboardShell';
import EmptyState from 'components/EmptyState';
import DataTable from 'components/DataTable';
import { useState, useEffect } from 'react'

const Dashboard = () => {
  const { data, error } = useSWR('/api/sites', fetcher);

  return(
    <DashboardShell>
      {data? <DataTable sites={data}/>: <EmptyState />}
    </DashboardShell>
  )

};

export default Dashboard;
