import 'reflect-metadata';
import { query, mutate } from '@/lib/test-utils';
// import { gql } from 'apollo-server-core';
import gql from 'graphql-tag';

import { prisma } from '@/lib/prisma/prisma-client';

let newUserId;

afterAll(async () => {
  await prisma.deleteUser({
    id: newUserId,
  });
});

describe('Mutation: createUser', () => {
  it('should be able to create a user', async () => {
    const res = await mutate({
      mutation: gql`
        mutation($firstName: String!, $lastName: String!) {
          user: createUser(input: { firstName: $firstName, lastName: $lastName }) {
            id
            fullName
          }
        }
      `,
      variables: {
        firstName: 'James',
        lastName: 'Smith',
      },
    } as any);

    newUserId = res.data!.user.id;

    expect(typeof res.data!.user.id).toBe('string');
    expect(res.data!.user.fullName).toEqual('James Smith');
  });
});

describe('Query: user', () => {
  it('should return a user given an existing ID', async () => {
    const res = await query({
      query: gql`
        query {
          user(id: "${newUserId}") {
            id
            fullName
          }
        }
      `,
    });

    expect(res.data!.user.id).toBe(newUserId);
    expect(res.data!.user.fullName).toEqual('James Smith');
  });

  it('should return an error if ID is incorrect', async () => {
    const res = await query({
      query: gql`
        query {
          user(id: "") {
            id
            fullName
          }
        }
      `,
    });

    expect(res.errors![0].message).toEqual('User was not found.');
  });
});
