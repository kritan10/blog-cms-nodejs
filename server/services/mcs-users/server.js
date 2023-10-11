import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { createUser, readUserById, updateById } from './modules/userModules/user.js'


// import path, { dirname } from 'path'




// const fileName = fileURLToPath(import.meta.url)
// console.log(fileName);
// const dirName  = path.dirname(fileName)
// console.log(dirName);

const protoPath  = new URL('/C:/Users/bibek.regmi/blog-cms-nodejs/server/services/mcs-users/proto/userProto/userCrud.rpc.proto', import.meta.url).pathname

// const filePath = `${__dirname}`;
// const testPath = './proto/userProto/userCrud.rpc.proto'
// const protoPath =  `${filePath}/${testPath}`


const packageDefinition = protoLoader.loadSync("C:/Users/bibek.regmi/blog-cms-nodejs/server/services/mcs-users/proto/userProto/userCrud.rpc.proto",{
    keepCase:true,
    longs:String,
    defaults:true
})
let  server = new grpc.Server();

const userProto = grpc.loadPackageDefinition(packageDefinition);


server.addService(userProto.user.userCrud.rpc.userCrudService.service,{
    create: createUser,
    read : readUserById,
    update : updateById 
})

   
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server bound 50051');
    });




