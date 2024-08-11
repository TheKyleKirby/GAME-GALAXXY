const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken')

const secret = 'mysecretshhhhh'
const expiration = '10d'

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user', {
        extension: {
            code: 'UNAUTHENTICATED'
        }
    }),

    authMiddleware: function ({ req }) {

        let token = req.body.token || req.query.token || req.headers.authorization;
    
        if (req.headers.authorization) {
          token = token.split(' ').pop().trim();
        }
    
        if (!token) {
          return req;
        }
        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          // console.log('Invalid token!');
        }
        return req;
      },

// talks between client and database without having to login several times
    signToken: function ({username,email, _id}) {
        const payload = { username, email, _id}
        return jwt.sign( { data:payload }, secret, { expiresIn: expiration } )
    }
}