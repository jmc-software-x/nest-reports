import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import PdfPrinter from 'pdfmake';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  hello() {
    const printer = new PdfPrinter(fonts);

    const docDefinition: TDocumentDefinitions = {
      content: [
        { text: 'Hello World', style: 'header' },
        'This is an example of a PDF document generated using pdfmake.',
        {
          text: 'This is a subheader',
          style: 'subheader',
        },
        {
          text: 'This is a paragraph with some styling.',
          style: 'paragraph',
        },
      ],
    };

    const doc = printer.createPdfKitDocument(docDefinition);

    return doc;
  }
}
