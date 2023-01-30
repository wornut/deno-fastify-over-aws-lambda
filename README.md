# Deno-Fastify

## Goals
[x] Touch Deno and Development Experiences  
[x] Try NPM packages and typescript in Deno  
[x] Try Deno cli like `fmt` | `run` or whatever  
[x] Refactoring Backend project from nodejs to Deno  
[] Write deno unit test and E2E test  
[] Deploy deno-fastify on aws-lambda  

---

## Bugs
bypass or comment `app.register(import('npm:@fastify/sensible'))` line 

of fixed its

`httpErrors.js` in [npm:@fastify/sensible](https://github.com/fastify/fastify-sensible/blob/master/lib/httpErrors.js) does not work correctly, I got an error about the split string function has been undefined because `require('http').STATUS_CODES` in Deno is not pairing like nodejs

for example 
in NodeJs STATUS_CODES js object will have key = HTTP status code and value is Http Status Message
```json
{
    "100": "Continue"
    ...
}
```

Deno STATUS_CODES, we got this
```json
{
    "Continue": 100
}
```
The key-value in Deno are opposite and break the normalized function in `@fastify/sensible` 

```javascript
const createError = require('http-errors')
const statusCodes = require('http').STATUS_CODES

const statusCodesMap = Object.assign({}, statusCodes)

Object.keys(statusCodesMap).forEach(code => {
  if(Number.isNaN(Number(code))) return; // <<-- add this line
  statusCodesMap[code] = normalize(code, statusCodesMap[code])
})
```