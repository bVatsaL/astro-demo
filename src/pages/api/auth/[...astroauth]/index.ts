// auth.config.ts
import Google from '@auth/core/providers/google';
import { Auth } from '@auth/core';

const request = new Request('http://localhost:4321/');
const response = await Auth(request, {
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  trustHost: true,
});

export { response as GET, response as POST };
