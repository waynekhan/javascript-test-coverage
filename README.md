# README

```text
npm install && \
  npx jest --coverage && \
  PROJECT_KEY=$(basename "`pwd`") && \
  sonar-scanner \
    -Dsonar.host.url=$SONAR_HOST_URL \
    -Dsonar.projectKey=$PROJECT_KEY \
    -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info \
    -Dsonar.login=$SONAR_TOKEN \
    -Dsonar.sources=src \
    -Dsonar.tests=tests \
  -X
```
