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
import { ImageCoverService } from './image-cover.service';
import { CreateImageCoverDto } from './dto/create-image-cover.dto';
import { UpdateImageCoverDto } from './dto/update-image-cover.dto';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { renameImage } from './helper/images.helper';

@Controller('image-cover')
export class ImageCoverController {
  constructor(private readonly imageCoverService: ImageCoverService) {}

  // @Post()
  // create(@Body() createImageCoverDto: CreateImageCoverDto) {
  //   return this.imageCoverService.create(createImageCoverDto);
  // }

  @Post()
  @UseInterceptors(
    FileInterceptor('imageCover', {
      storage: diskStorage({
        destination: 'src/images/upload-image-cover',
        filename: renameImage,
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    const filePath = file.path;
    const description = body.description;
    const createImageCoverDto: CreateImageCoverDto = {
      imageUrl: filePath,
      description: description,
    };
    const savedImage = await this.imageCoverService.create(createImageCoverDto);
    return savedImage;
  }

  @Get()
  findAll() {
    return this.imageCoverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imageCoverService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImageCoverDto: UpdateImageCoverDto,
  ) {
    return this.imageCoverService.update(+id, updateImageCoverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageCoverService.remove(+id);
  }
}
