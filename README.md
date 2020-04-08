# todoist-testcafe-newman

Automated tests for todoist web app.

## Tools

- [Testcafe](https://devexpress.github.io/testcafe/)
- [Postman/Newman](https://github.com/postmanlabs/newman)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [SonarJS](https://www.sonarsource.com/products/codeanalyzers/sonarjs.html)
- [BrowserStack](https://www.browserstack.com/)
- [Docker](https://www.docker.com/)

## Test Execution

Run tests by command line:

- **API**

```
$ npm run test-api
```

- **Frontend**

```
$ npm run test-front
```

### Docker

- **API**

```
$ docker-compose run todoist_api_tests
```

- **Frontend**

```
$ BROWSER={$BROWSER_NAME} docker-compose run todoist_frontend_tests
```
