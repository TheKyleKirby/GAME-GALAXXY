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

// Log the token to verify it's being passed correctly
console.log('----AUTH.JS server LINE 18: Token Received -----', token);

        if (!token) {
          return { user: null };
        }

        try {
          const { data } = jwt.verify(token, secret, { expiresIn: '10d' });
console.log( '----AUTH.JS LINE 23 ----- ' , data);
          return { user: data }

        } catch (error) {
console.error('Invalid token!', error);
          throw new GraphQLError('Could not authenticate user', {
            extensions: {
                code: 'UNAUTHENTICATED',
            },
        })
      }
    },
// talks between client and database without having to login several times
    signToken: function ({username,email, _id}) {
        const payload = { username, email, _id}
console.log( '-----AUTH.JS SERVER LINE 39 ----- ' , payload);

        return jwt.sign( payload, secret, { expiresIn: '10d' } )
    }
}