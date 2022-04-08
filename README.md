## Description
NestJS App with 
- Yarn
- TypesScript
- Postgres & Docker
- TypeORM
- Migrations
- User entity

## Nest commands
```bash
# Install Nest
$ nest n nest-typeorm-users -p yarn -l TS -g

# Install TypeORM
$ yarn add @nestjs/typeorm typeorm@0.2

# Generate entity
$ nest g resource <entity>

# Generate project resources
$ yarn build
```

## Installation
```bash
$ yarn install
$ docker-compose up -d
$ npm run migration:run
```

## Running the app
```bash
# development
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
# Connect to DB
> psql -U root -d db_nest_users

# List of tables
> \dt
```

## Completed Tasks
- [x] Setup Nest app
- [x] Install TypeORM
- [x] Setup Postgres with Docker
- [x] Connect to Postgres
- [x] Create User entity
- [x] Create few migrations
- [x] CRUD operations for User entity with TypeORM
