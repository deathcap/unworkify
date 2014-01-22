# unworkify

Non-concurrent API compatible with [webworkers](http://www.w3.org/TR/workers/) for environments where webworkers are unavailable

Works as drop-in replacement for @substack's [webworkify](https://github.com/substack/webworkify), instead of:

    w = require('webworkify')(require('./worker.js'));

write:

    w = require('unworkify')(require('./worker.js'));

Compatible with NodeJS and browserify. Warning: incomplete and possibly buggy API implementation

## Example

See `example/main.js`, uses `webworkify` in the browser and `unworkify` on servers (based on the webworkify example).

## See also

* [node-webworker-threads](https://github.com/audreyt/node-webworker-threads) - WebWorker API for NodeJS using threads
* [node-worker](https://github.com/deathcap/node-worker) - WebWorker API for NodeJS using processes

## License

MIT

