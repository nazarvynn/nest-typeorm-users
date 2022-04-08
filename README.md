## Description
NestJS App with 
- Yarn
- TypesScript
- Postgres & Docker
- Typeorm
- Migrations
- User entity

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ docker-compose up -d
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Migration commands
```bash
# Create new empty migration
$ migration:create <migration_name>

# Generate new migration based on entity
$ migration:generate <migration_name>

# Apply all cerated migrations
$ migration:run

# Rollback executed migrations. Migration files should be removed after rollback
$ migration:down
```

## Postgres commands
```bash
> psql -U root -d db_nest_users
> \dt
```

## Completed Tasks
- [x] Setup Nest app
- [x] Install Typeorm
- [x] Setup Postgres with Docker
- [x] Connect to Postgres
- [x] Create User entity
- [x] Create few migrations
- [ ] CRUD operations for User entity with Typeorm
