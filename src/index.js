import { GraphQLClient } from 'graphql-request'

const defaultHeaders = {
  'x-api-key': 'APIKEYVALUE'
}

export default function(serviceName, headers) {
  return new GraphQLClient(resolveEndpoint(serviceName), {
    headers: {
      ...defaultHeaders,
      ...headers
    }
  })
}

const resolveEndpoint = serviceName => {
  //TODO Use DNS resolver to set appropriate endpoint.
  return serviceName
}
