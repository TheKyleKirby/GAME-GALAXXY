const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken')

const secret = 'mysecretshhhhh'
const expiration = '2h'

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user', {
        extension: {
            code: 'UNAUTHENTICATED'
        }
    }),

// talks between client and database without having to login several times
    signToken: function ({email,name, _id}) {
        const payload = { email, name, _id}
        return jwt.sign( { data:payload }, secret, { expiresIn: expiration } )
    }
} 