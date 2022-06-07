import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getJWTConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
  uri: configService.get('JWT_SECRET'),
})
