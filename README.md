# Blog Content Management System

Fully-fledged, multi-module, dockerized, content management system built using gRPC server and express gateway.

### Modules

-   #### common
-   #### gateway
-   #### server

#### common

-   contains common files shared with both gateway and server
-   e.g protocol buffer files
-   is deployed separately in a docker container

#### server

-   gRPC server that contains the core logic of the application
-   has basic crud operations including pagination
-   environment variables for development and docker environments
-   database using mysql2 and sequelize
-   includes migration and seeders for database
-   advanced querying such as bridging tables using transactions and rollbacks
-   basic error handling

#### gateway

-   express server that provides a gateway to the gRPC server
-   environment variables for development and docker environments

## TODO

-   use best practices for status codes in gateway
-   add authentication is gateway
