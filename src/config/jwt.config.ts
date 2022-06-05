import { ConfigService } from '@nestjs/config'

export const getJWTConfig = async (
  configService: ConfigService
): Promise<any> => ({
  uri: configService.get('JWT_SECRET'),
})
