import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as bcrypt from 'bcryptjs';

import { Session } from '@/lib/auth/session';
import prisma from '@/lib/prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'app-login',
      name: 'App Login',
      credentials: {
        email: {
          label: 'Email Address',
          type: 'email',
          placeholder: 'john.doe@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.email,
            },
            include: {
              role: true,
            },
          });

          if (!user || !credentials) {
            throw new Error('Invalid Credentials');
          }

          const isValid = await bcrypt.compare(credentials.password, user.password || '');

          if (!isValid) {
            throw new Error('Invalid Credentials');
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            isEnabled: user.isEnabled,
            role: user.role.name,
          };
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/private/dashboard`;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },
    // @ts-ignore
    async session({ session, token, user }) {
      const newSession: Session = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
        },
      };

      return newSession;
    },
  },
});
