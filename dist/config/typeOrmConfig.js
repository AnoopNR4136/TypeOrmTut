"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'db_ecart',
    entities: [__dirname + '/..**/*.entity.ts'],
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
};
//# sourceMappingURL=typeOrmConfig.js.map