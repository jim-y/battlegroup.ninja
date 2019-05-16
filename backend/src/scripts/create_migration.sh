#!/bin/sh

knex migrate:make --knexfile knexfile.ts -x ts $1