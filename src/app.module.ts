import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';

// @module degenimiz decarator, keyingi keletugin funksiyani aniqlap beredi, keyingi keletugin funksiyani bizlefge validatsiya qiliop beredi, keyingi keletegun funksiya bizlerge neler qiliwin aniwlap aliwga jardem beredi
@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController], //controller module
  providers: [AppService], // service module
})

// tepadagi @module({}) - decarator deb ataladi
export class AppModule {}

// @module orqali AppModule oddiy JS functiondan, boyitilgan module ingredietlarimizga aylnayabdi
// olar import, controller, provider
