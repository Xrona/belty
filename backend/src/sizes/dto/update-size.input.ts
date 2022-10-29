import { CreateSizeInput } from './create-size.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSizeInput extends PartialType(CreateSizeInput) {
  @Field(() => Int)
  id: number;
}
