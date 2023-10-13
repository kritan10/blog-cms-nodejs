
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'


// import path, { dirname } from 'path'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


// let dirPath = path.join(process.cwd(), '/server/services/common/proto/userProto/userCrud.rpc.proto')


const packageDefinition = protoLoader.loadSync(`${__dirname}/proto/userProto/userCrud.rpc.proto`, {
    keepCase: true,
    longs: 'string',
    defaults: true,
  });

  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  const SimpleuserCrudService = protoDescriptor.user.userCrud.rpc.userCrudService;

  const client = new SimpleuserCrudService(
      "localhost:50051",
      grpc.credentials.createInsecure()
  );
  
export   { client };
