# Least-Recently Used (LRU) Cache Demo

A NestJS project to demo
the [LRU Cache library](https://github.com/saaniaki/LruCache).

An instance of this repository has been deployed to
[lrucache.tk](https://lrucache.tk/), please give it a visit! :bowtie:

## Endpoints

* Health:
    * `GET /`
* Re-instantiates the cache instance:
    * `POST /re-instantiate`
    * Body: `{ capacity: <a positive integer>}`
* Getting a GitHib profile and caches it:
    * `GET /:username`
* Removes a GitHib profile from the cache:
    * `DELETE /:username`
* Resets the cache instance:
    * `POST /reset`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```