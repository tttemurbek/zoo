import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//localhost:3000
// @ bul controller decarator degenimiz,
@Controller() // eger Nestjs dan keletugin Controllerlardi qollanasaq, AppController apiwayi controller bolip qala beredi
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Get('detail')
  public getDetail(): string {
    return this.appService.getDetail();
  }
}

// decaratorlar funksiyamizdin qanday islewin tusindirip beredi
// controllerde funksiyalar boladi, misali bul jerde tiykarinan API, post-get, response-request, statuslar
