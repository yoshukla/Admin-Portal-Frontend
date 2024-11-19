import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 // Static data for users
const staticUsers = [
  { id: '1', email: 'admin@medibank.com', name: 'Admin User', password: 'admin123' },
  { id: '2', email: 'john.doe@example.com', name: 'John Doe', password: 'john123' },
  { id: '3', email: 'jane.smith@example.com', name: 'Jane Smith', password: 'jane123' },
];

// Static function to find a user by email
async function getUser(email: string, password: string) { 
  const user = staticUsers.find((user) => user.email === email); 
  if (user) { 
      return user; 
  } 
  return null;
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email, password); // Using static data function
            
            if (user) {
              return user; // Return the user if authentication is successful
            }
          } 
          console.log('Invalid credentials');
          return null; // Return null if user not found or password mismatch
        },
    }),
  ],
});