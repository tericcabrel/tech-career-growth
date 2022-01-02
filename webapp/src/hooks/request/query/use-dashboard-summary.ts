import { useQuery } from 'react-query';

import { DashboardSummaryData } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useDashboardSummary = () => {
  const httpClient = useHttpClient();

  return useQuery(QUERY_KEYS.dashboardSummary, async () => {
    const response = await httpClient.get<DashboardSummaryData>('stat/summary');

    return response.data.data;
  });
};

export default useDashboardSummary;
