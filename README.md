# downfor.js website status checker

A website status checker written in node

API Resource: [downforeveryoneorjustme.com](https://downforeveryoneorjustme.com/)

## Usage

```bash
node index github.com
```

it will return JSON result;

```json
{
  statusCode: 200,
  statusText: 'OK',
  isDown: false,
  returnedUrl: 'https://github.com/',
  requestedDomain: 'github.com',
  lastChecked: 1589144934460
}
```


## Test

This project use **jest** to run tests

```bash
npm run test
```


## ToDo

Write more tests!
