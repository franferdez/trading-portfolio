import { UserNotFoundError } from '@/lib/errors';
import { Prisma as PrismaClient } from '@/lib/prisma/prisma-client';
import { MutationResolvers, QueryResolvers, UserResolvers } from '@/types/generated-types';

export const Mutation: MutationResolvers = {};

export const Query: QueryResolvers = {};

export const User: UserResolvers = {};
