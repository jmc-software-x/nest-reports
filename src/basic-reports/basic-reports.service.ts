import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getHelloWorldDocDefinition } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly printer: PrinterService) {
    super();
  }

  hello() {
    const doc = this.printer.createPdf(
      getHelloWorldDocDefinition({
        title: 'DIAZ LOPEZ JAMES',
      }),
    );

    return doc;
  }
}
