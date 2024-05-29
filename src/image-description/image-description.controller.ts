import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ImageDescriptionService } from './image-description.service';
import { CreateImageDescriptionDto } from './dto/create-image-description.dto';
import { UpdateImageDescriptionDto } from './dto/update-image-description.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameImage } from './helper/images.helper';

@Controller('image-description')
export class ImageDescriptionController {
  constructor(
    private readonly imageDescriptionService: ImageDescriptionService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('imageDescription', {
      storage: diskStorage({
        destination: 'src/images/upload-image-description',
        filename: renameImage,
      }),
    }),
  )
  async postImageCover(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateImageDescriptionDto,
  ) {
    const filePath = file.path;

    const createImageDescriptionDto: CreateImageDescriptionDto = {
      imageUrl: filePath,
      description: body.description,
      idImageCover: Number(body.idImageCover),
    };
    const savedImage = await this.imageDescriptionService.create(
      createImageDescriptionDto,
    );
    return savedImage;
  }

  @Get()
  findAll() {
    return this.imageDescriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageDescriptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImageDescriptionDto: UpdateImageDescriptionDto,
  ) {
    return this.imageDescriptionService.update(+id, updateImageDescriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageDescriptionService.remove(+id);
  }
}
