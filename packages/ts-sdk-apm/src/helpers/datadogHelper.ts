import datadog from 'dd-trace'

// Initialize datadog once
datadog.init()

// Record metrics for datadog
export const recordDatadog = (
  metric: number,
  tags?: { [tag: string]: string | number }
): void => {
  datadog.dogstatsd.gauge(`Commercetools_Client_Response_Total`, metric, tags)
}
