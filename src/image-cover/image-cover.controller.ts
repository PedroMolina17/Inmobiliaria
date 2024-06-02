import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { renameImage } from './helper/images.helper';

@Controller('image-cover')
export class ImageCoverController {
  constructor(private readonly imageCoverService: ImageCoverService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('imageCover', {
      storage: diskStorage({
        destination: './dist/images/upload-image-cover',
        filename: renameImage,
      }),
    }),
  )
  async postImageCover(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateImageCoverDto,
  ) {
    const filePath = `/upload-image-cover/${file.filename}`;
    const description = body.description;
    const createImageCoverDto: CreateImageCoverDto = {
      imageUrl: filePath,
      description: description,
    };
    const savedImage = await this.imageCoverService.create(createImageCoverDto);
    return savedImage;
  }

  @Get()
  findAllImageCover() {
    return this.imageCoverService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const typeUser = await this.imageCoverService.findOne(Number(id));
    if (!typeUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return typeUser;
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('imageCover', {
      storage: diskStorage({
        destination: './images/upload-image-cover',
        filename: renameImage,
      }),
    }),
  )
  async putImageCover(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateImageCoverDto,
    @Param('id') id: string,
  ) {
    const filePath = `/images/upload-image-cover/${file.filename}`;
    const description = body.description;
    const createImageCoverDto: CreateImageCoverDto = {
      imageUrl: filePath,
      description: description,
    };
    const savedImage = await this.imageCoverService.update(
      Number(id),
      createImageCoverDto,
    );
    return savedImage;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const deleteImageCover = await this.imageCoverService.remove(+id);
      if (!deleteImageCover) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return deleteImageCover;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }
}
