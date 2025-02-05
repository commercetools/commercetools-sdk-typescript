import { datadog, newrelic } from './lib/agents'

export const time = () => performance.now()

// record for datadog
export const recordDatadog = (
  metric: number,
  tags?: { [tag: string]: string | number }
): void => {
  datadog
    .init()
    .dogstatsd.gauge(`Commercetools_Client_Response_Total`, metric, tags)
}

// record for newrelic
export const recordNewrelic = (metric: number | newrelic.Metric): void => {
  newrelic.recordMetric(`Commercetools/Client/Response/Total`, metric)
}
