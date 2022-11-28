import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password
        }

        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(`${process.env.apiUrl}users/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()


        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        } else {
          // Return an object that will pass error information through to the client-side.
          throw new Error( JSON.stringify({ errors: user.error, message: user.message, status: false }))
        }

      }
    })
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Set the tokens values
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.token,
          first_name: user.data.first_name,
          last_name: user.data.last_name,
          email: user.data.email,
          gender: user.data.gender,
          status: user.data.status,
          user_id: user.data.id,
          phone_number: user.phone_number,
          birthday: user.birthday
        };
      }

      return token;
    },


    // set the sessions values
    async session({ session, token }) {
      
      session.user.accessToken = token.accessToken
      session.user.email = token.email
      session.user.first_name = token.first_name
      session.user.last_name = token.last_name
      session.user.gender = token.gender
      session.user.status = token.status
      session.user.user_id = token.user_id
      session.user.phone_number = token.phone_number
      session.user.birthday = token.birthday
      return session;
    },
  },
})