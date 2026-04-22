import { env } from "./lib/env";
import { logger } from "./lib/logger";
import { app } from "./app";

app.listen(env.PORT, () => {
  logger.info(`Server is running on http://localhost:${env.PORT}`);
});
