import { Test, TestingModule } from '@nestjs/testing';
import { ManageResolver } from './manage.resolver';
import { ManageService } from './manage.service';

describe('ManageResolver', () => {
  let resolver: ManageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageResolver, ManageService],
    }).compile();

    resolver = module.get<ManageResolver>(ManageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
