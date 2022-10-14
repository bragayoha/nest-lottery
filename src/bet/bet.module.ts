import { Module } from '@nestjs/common';
import { BetService } from './bet.service';
import { BetResolver } from './bet.resolver';

@Module({
  providers: [BetService, BetResolver]
})
export class BetModule {}
