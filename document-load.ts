import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base'
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web'
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load'
import { ZoneContextManager } from '@opentelemetry/context-zone'
import { registerInstrumentations } from '@opentelemetry/instrumentation'

const console = new ConsoleSpanExporter()

const provider = new WebTracerProvider({
  spanProcessors: [new SimpleSpanProcessor(console)]
})

provider.register({
  contextManager: new ZoneContextManager()
})

registerInstrumentations({
  instrumentations: [new DocumentLoadInstrumentation()]
})
