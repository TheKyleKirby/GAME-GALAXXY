const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken')

const secret = 'mysecretshhhhh'

module.exports = {

    authMiddleware: function ({ req }) {

    // allows token to be sent through req.query or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
          token = req.headers.authorization.split(' ').pop().trim();
        }
    
        if (!token) {
          return req;
        }

        try {
          const { data } = jwt.verify(token, secret, { expiresIn: '10d' });
          req.user = data;
        } catch (error) {
          console.error('Invalid token!', error);
          throw new GraphQLError('Could not authenticate user', {
            extensions: {
                code: 'UNAUTHENTICATED',
            },
        })
      }
      return req;
    },
// talks between client and database without having to login several times
    signToken: function ({username,email, _id}) {
        const payload = { username, email, _id}
        return jwt.sign( { data:payload }, secret, { expiresIn: '10d' } )
    }
}