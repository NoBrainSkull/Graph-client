# Graph-client
Initialize graphQl Client and Sign request for IAM authentication

:construction::construction::construction::construction::construction::construction::construction::construction::construction::construction:

## Do not forget

in `serverless.yml`
```yml
...
provider:
  ...
  environment:
    SLS_STAGE: ${self:provider.stage} 
  iamRoleStatements:
    - Effect: Allow
      Action:
        - ssm:GetParameters
        - execute-api:*
      Resource: '*'
...
```