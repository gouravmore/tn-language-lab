export const environment = {
  production: false,
  environment: "LOCAL",
  showEnvironment: true,
  telemetryContext: {
    batchSize: 10,
    pdata: { // Optional. Producer of the event
      id: "languagelab.portal", // Required. unique id assigned to that component
      pid: "languagelab.portal.", // Optional. In case the component is distributed, then which instance of that component
      ver: "1.0.0"// Optional. version number of the build
    },
    env: "languagelab.portal", // Required. Unique environment where the event has occured.
    apislug: '/telemetry/',
    endpoint: 'upload'
  }
};
