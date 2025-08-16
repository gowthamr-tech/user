import { forwardRef, Inject } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/roles.decorator';
import { OrgService } from 'src/org/org.service';

@Resolver('User')
export class UsersResolver {
    
  @Roles()
  @Mutation('signUp')
  signup(@Args('sign') input: any) {
    console.log('Entered Mutation');
    const a = {
      first_name: 'Gowtham',
      id: 1,
    };
    return a;
  }
}
