import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { createUser, readUserById, updateById, deleteById} from './modules/userModules/user.js'


// import path, { dirname } from 'path'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

// C:/Users/bibek.regmi/blog-cms-nodejs/server/services/mcs-users/proto/userProto/userCrud.rpc.proto

const packageDefinition = protoLoader.loadSync(`${__dirname}/proto/userProto/userCrud.rpc.proto`,{
    keepCase:true,
    longs:String,
    defaults:true
})
let  server = new grpc.Server();

const userProto = grpc.loadPackageDefinition(packageDefinition);


server.addService(userProto.user.userCrud.rpc.userCrudService.service,{
    create: createUser,
    read : readUserById,
    update : updateById,
    delete : deleteById
})

   
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server bound 50051');
    });




