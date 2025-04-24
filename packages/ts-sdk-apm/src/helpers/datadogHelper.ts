import datadog from 'dd-trace'

// Initialize datadog once
datadog.init()

// Record metrics for datadog
export const recordDatadog = (
  metric: number,
  tags?: { [tag: string]: string | number }
): void => {
  datadog.dogstatsd.gauge(`client_response_time`, metric, tags)
}
