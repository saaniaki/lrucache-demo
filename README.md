# Least-Recently Used (LRU) Cache Demo

LRU Cache Demo is a NestJS server side application that fetches and caches
GitHub user profiles using
the [LRU Cache library](https://github.com/saaniaki/LruCache).

An instance of this repository has been deployed to
[lrucache.tk](https://lrucache.tk/), please give it a visit! :bowtie: Please 
late a look at the endpoints below to start using the application.

## Endpoints

* Checks the application health:
    * `GET /`
* Gets a GitHib profile and caches it:
    * `GET /:username`
* Removes a GitHib profile from the cache:
    * `DELETE /:username`
* Resets the cache instance:
    * `POST /reset`
* Re-instantiates the cache instance:
  * `POST /re-instantiate`
  * Body: `{ capacity: <a positive integer>}`

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