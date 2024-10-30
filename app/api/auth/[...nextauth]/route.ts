import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://platform.planet-ev.com:8443/ev/api/v2/auth/login",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );
        const response = await res.json();

        console.log("response", response.data);
        if (response.data.statusCode === 200) {
          return response.data;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.userId;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }

      // if (user) {
      //   token.id = user.userId
      // }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }:any) {
      if (token) {
        session.user = {
          id: token.id,
          role: token.role,
          accessToken: token.accessToken,
          // เพิ่มคุณสมบัติผู้ใช้อื่นๆ ตามที่ต้องการ
        };
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
