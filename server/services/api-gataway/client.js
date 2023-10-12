
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'


// import path, { dirname } from 'path'

import path from 'path';

let dirPath = path.join(process.cwd(), '/server/services/common/proto/userProto/userCrud.rpc.proto')





const packageDefinition = protoLoader.loadSync(dirPath, {
    keepCase: true,
    longs: 'string',
    defaults: true,
  });
  const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
  const SimpleuserCrudService = protoDescriptor.user.userCrud.rpc.userCrudService;

  const client = new SimpleuserCrudService(
      "0.0.0.0:50051",
      grpc.credentials.createInsecure()
  );
  
export   {client};