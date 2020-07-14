import cli from '../../src/application/cli'
import AWSMock from 'aws-sdk-mock'
import AWS from 'aws-sdk'

beforeAll(() => {
  AWSMock.setSDKInstance(AWS)

  AWSMock.mock(
    'CostExplorer',
    'getCostAndUsage',
    (params: AWS.CostExplorer.GetCostAndUsageRequest, callback: (a: Error, response: any) => any) => {
      callback(null, {
        ResultsByTime: [
          {
            Estimated: false,
            Groups: [],
            TimePeriod: {
              End: '2020-06-28',
              Start: '2020-06-27',
            },
            Total: {
              UsageQuantity: {
                Amount: '1.0',
                Unit: 'GB-Month',
              },
            },
          },
          {
            Estimated: false,
            Groups: [],
            TimePeriod: {
              End: '2020-06-29',
              Start: '2020-06-28',
            },
            Total: {
              UsageQuantity: {
                Amount: '2.0',
                Unit: 'GB-Month',
              },
            },
          },
        ],
      })
    },
  )
})

afterAll(() => {
  AWSMock.restore()
})

describe('cli', () => {
  test('cli integration test', async () => {
    const result = await cli(['executable', 'file', '--startDate', '2020-07-10', '--endDate', '2020-07-13'])

    expect(result).toEqual(
      '┌────────────────────┬────────────────────┬──────────────────────────────┐\n' +
        '│ Date (UTC)         │ EBS Wattage        │ EBS CO2e Emissions           │\n' +
        '├────────────────────┼────────────────────┼──────────────────────────────┤\n' +
        '│ 2020-06-26         │ 1.09 Watts         │ 0.000774 Kg CO2e             │\n' +
        '├────────────────────┼────────────────────┼──────────────────────────────┤\n' +
        '│ 2020-06-27         │ 2.19 Watts         │ 0.001548 Kg CO2e             │\n' +
        '├────────────────────┼────────────────────┼──────────────────────────────┤\n' +
        '│ Total              │ 3.28 Watts         │ 0.002321 Kg CO2e             │\n' +
        '└────────────────────┴────────────────────┴──────────────────────────────┘',
    )
  })
})