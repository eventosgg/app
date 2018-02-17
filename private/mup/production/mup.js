module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '13.93.123.100',
      username: 'eventosgg',
      password: 'G4m3rs@3v3nt0sGG'
      // pem: './path/to/pem'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    name: 'eventosgg_app',
    path: '../../../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      PORT:8000,
      ROOT_URL: 'https://app.eventos.gg',
      MONGO_URL: 'mongodb://localhost/eventosgg_app',
    },

    /*ssl: { // (optional)
      autogenerate: {
        email: 'pablo@converfit.com',
        domains: 'chat.conver.fit'
      }
    },
    */
    docker: {
      // change to 'kadirahq/meteord' if your app is using Meteor 1.3 or older
      //image: 'abernix/meteord:base',
    	image: 'abernix/meteord:node-8.4.0-base'
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
