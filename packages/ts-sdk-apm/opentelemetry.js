const { NodeTracerProvider } = require('@opentelemetry/node')
const {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} = require('@opentelemetry/tracing')

const provider = new NodeTracerProvider()
const consoleExporter = new ConsoleSpanExporter()
const spanProcessor = new SimpleSpanProcessor(consoleExporter)

provider.addSpanProcessor(spanProcessor)
provider.register()
