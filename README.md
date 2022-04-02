# bored-api

## Getting Started
### Env files
Change `sample.env` to `.env` within `./database` and `./api`.

From project root:
```
cp api/sample.env api/.env && cp database/sample.env database/.env
```
### Docker
Using `docker-compose` build and run the project.

From project root:
```
docker-compose build && docker-compose up -d
```
Then navigate to http://localhost:3000/