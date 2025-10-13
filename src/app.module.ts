import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [InvoicesModule, UsersModule],
  providers: [],
})
export class AppModule {}
