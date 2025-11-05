import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
      logging: ['error', 'warn'],
    }),
  ],
})
export class DatabaseModule implements OnApplicationBootstrap {
    private readonly logger = new Logger(DatabaseModule.name);
  
    constructor(private dataSource: DataSource) {}
  
    async onApplicationBootstrap() {
      if (this.dataSource.isInitialized) {
        this.logger.log(`✅ Database connected: ${this.dataSource.options.database}`);
      } else {
        this.logger.error('❌ Failed to initialize database connection');
      }
    }
}
