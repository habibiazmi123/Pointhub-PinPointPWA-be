import DatabaseConnection, {
  CreateOptionsInterface,
  DocumentInterface,
  CreateResultInterface,
} from "@src/database/connection.js";
import DatabaseManager from "@src/database/database-manager.js";

export class CreateAttendanceRepository {
  public databaseManager;

  constructor(databaseConnection: DatabaseConnection) {
    this.databaseManager = new DatabaseManager(databaseConnection, "attendances");
  }

  public async handle(document: DocumentInterface, options?: CreateOptionsInterface): Promise<CreateResultInterface> {
    return await this.databaseManager.create(document, options);
  }
}
