# README

```text
npm install && \
  npx jest --coverage && \
  sonar-scanner \
    -Dsonar.projectKey=$(basename `pwd`) \
    -Dsonar.javascript.lcov.reportPaths=./coverage/lcov.info \
    -Dsonar.sources=src \
    -Dsonar.tests=tests \
    -X
```
