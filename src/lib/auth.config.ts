import { Session } from 'next-auth';
import { NextRequest } from 'next/server';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { JWT } from '@auth/core/jwt';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { AdapterUser } from '@auth/core/adapters';

export interface ProjectSession extends Session {
    id: string;
    isAdmin: boolean;
}

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: AdapterUser }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({
            session,
            token,
        }: {
            session: Session;
            token: JWT;
        }): Promise<ProjectSession> {
            return { ...session, id: token.id, isAdmin: token.isAdmin };
        },
        authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
            const user = auth as ProjectSession;
            const isOnAdminPanel = request.nextUrl.pathname.startsWith('/admin');
            const isBlogPage = request.nextUrl.pathname.startsWith('/blog');
            const isOnLoginPage = request.nextUrl.pathname.startsWith('/login');

            // 如果在admin页面 但是没有管理员权限
            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // 如果在blog页面 并且没有登录
            if (isBlogPage && !user) {
                return false;
            }

            // 如果在登录页面并且已经登录
            if (isOnLoginPage && user) {
                return Response.redirect(new URL('/', request.nextUrl));
            }
            return true;
        },
    },
};
