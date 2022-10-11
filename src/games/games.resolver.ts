import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateGameInput } from './dto/create-game.input';
import { UpdateGameInput } from './dto/update-game.input';
import { Game } from './games.entity';
import { GamesService } from './games.service';

@Resolver('Game')
export class GamesResolver {
  constructor(private gamesService: GamesService) {}

  @Query(() => [Game])
  async games(): Promise<Game[]> {
    const games = await this.gamesService.getAllGames();
    return games;
  }

  @Query(() => Game)
  async game(@Args('id') id: string): Promise<Game> {
    const game = await this.gamesService.getGameById(id);
    return game;
  }

  @Mutation(() => Game)
  async createGame(@Args('data') data: CreateGameInput): Promise<Game> {
    const game = await this.gamesService.createGame(data);
    return game;
  }

  @Mutation(() => Game)
  async updateGame(
    @Args('id') id: string,
    @Args('data') data: UpdateGameInput,
  ): Promise<Game> {
    const game = this.gamesService.updateGame(id, data);
    return game;
  }

  @Mutation(() => Boolean)
  async deleteGame(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.gamesService.deleteGame(id);
    return deleted;
  }
}
