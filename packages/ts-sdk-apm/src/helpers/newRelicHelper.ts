import newrelic from 'newrelic'

// record for newrelic
export const recordNewRelic = (metric: number | newrelic.Metric): void => {
  newrelic.recordMetric(`Client/Response/Time`, metric)
}
