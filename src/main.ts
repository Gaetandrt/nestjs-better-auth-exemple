import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
import { CustomValidationPipe } from "./pipes/custom-validation.pipe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  const configService = app.get<ConfigService>(ConfigService);

  // Swagger Doc's configuration
  const config = new DocumentBuilder()
    .setTitle("Rester Jeune API")
    .setDescription("The Rester Jeune API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(
    // Allows pre-controller blocking DTO validation
    new CustomValidationPipe()
  );

  // Filters
  app.useGlobalFilters(
    // Catch all thrown HTTP exceptions
    new HttpExceptionFilter()
  );

  const port = configService.get("PORT") | 3000;

  await app.listen(port);
  console.log("App running on port ", port);
}
bootstrap();
