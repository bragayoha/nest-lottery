import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './games.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gamesRepository: Repository<Game>,
  ) {}

  async getAllGames(): Promise<Game[]> {
    const games = await this.gamesRepository.find();
    return games;
  }

  async getGameById(id: string): Promise<Game> {
    const game = await this.gamesRepository.findOneBy({ id });
    if (!game) throw new NotFoundException('Game not found');
    return game;
  }

  async createGame(data: CreateGameInput): Promise<Game> {
    const game = this.gamesRepository.create(data);
    const gameSaved = await this.gamesRepository.save(game);
    if (!gameSaved)
      throw new InternalServerErrorException('Fail in create game');
    return gameSaved;
  }

  async updateGame(id: string, data: UpdateGameInput): Promise<Game> {
    const game = await this.getGameById(id);
    await this.gamesRepository.update(game, { ...data });
    const gameUpdated = this.gamesRepository.create({ ...game, ...data });
    return gameUpdated;
  }

  async deleteGame(id: string): Promise<boolean> {
    const game = await this.getGameById(id);
    const deleted = await this.gamesRepository.delete(game);
    if (deleted) return true;
    return false;
  }
}
