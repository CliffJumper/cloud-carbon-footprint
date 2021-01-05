/*
 * © 2020 ThoughtWorks, Inc. All rights reserved.
 */

import { BigQueryDate } from '@google-cloud/bigquery'

const bigQueryDateOne: BigQueryDate = { value: '2020-11-02' }
const bigQueryDateTwo: BigQueryDate = { value: '2020-10-28' }

export const mockQueryResultsAppEngineSSDStorageRAM: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountName: 'test-account',
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Cloud Datastore Storage',
      usageUnit: 'byte-seconds',
      vcpus: null as string | null,
      usageAmount: 2.83e16,
      cost: 5,
    },
    {
      timestamp: bigQueryDateOne,
      accountName: 'test-account',
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'Flex Instance RAM',
      usageUnit: 'byte-seconds',
      vcpus: null as string | null,
      usageAmount: 3.91e18,
      cost: 10,
    },
    {
      timestamp: bigQueryDateOne,
      accountName: 'test-account',
      region: 'us-east1',
      serviceName: 'App Engine',
      usageType: 'GCS Storage',
      usageUnit: 'byte-seconds',
      vcpus: null as string | null,
      usageAmount: 380040914534400,
      cost: 10,
    },
  ],
]

export const mockQueryResultsCloudSQLSSDComputeEngineDataFlowHDD: any[][] = [
  [
    {
      timestamp: bigQueryDateOne,
      accountName: 'test-account',
      region: 'us-east1',
      serviceName: 'Cloud SQL',
      usageType: 'Storage PD SSD for DB in Americas',
      usageUnit: 'byte-seconds',
      vcpus: null as string | null,
      usageAmount: 4.26e18,
      cost: 7,
    },
    {
      timestamp: bigQueryDateOne,
      accountName: 'test-account',
      region: 'us-east1',
      serviceName: 'Compute Engine',
      usageType: 'Compute optimized Core running in Americas',
      usageUnit: 'seconds',
      vcpus: '16',
      usageAmount: 80000,
      cost: 7,
    },
    {
      timestamp: bigQueryDateTwo,
      accountName: 'test-account',
      region: 'us-west1',
      serviceName: 'Cloud Dataflow',
      usageType: 'Local Disk Time PD Standard Belgium',
      usageUnit: 'byte-seconds',
      vcpus: null,
      usageAmount: 7.8e17,
      cost: 12,
    },
    {
      timestamp: bigQueryDateTwo,
      accountName: 'test-account',
      region: 'us-west1',
      serviceName: 'Cloud Functions',
      usageType: 'Memory Time',
      usageUnit: 'byte-seconds',
      vcpus: null,
      usageAmount: 120,
      cost: 10,
    },
  ],
]
