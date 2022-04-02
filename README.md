# bored-api

## Getting Started
### Env files
Change `sample.env` to `.env` within `./database` and `./api` with the following command.

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

In the event of a Database error, please insure that `database/start.sh` is saved with the `LF` end of line sequence, and rebuild