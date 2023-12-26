"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const remult_1 = require("remult");
let Task = class Task {
    constructor() {
        this.id = '';
        this.title = '';
        this.completed = false;
    }
};
exports.Task = Task;
tslib_1.__decorate([
    remult_1.Fields.cuid()
], Task.prototype, "id", void 0);
tslib_1.__decorate([
    remult_1.Fields.string({
        validate: (task) => {
            if (!task.title)
                throw 'Should not be empty';
            if (task.title.length < 3)
                throw 'Too Short';
        },
        allowApiUpdate: 'admin',
    })
], Task.prototype, "title", void 0);
tslib_1.__decorate([
    remult_1.Fields.boolean()
], Task.prototype, "completed", void 0);
tslib_1.__decorate([
    remult_1.Fields.createdAt()
], Task.prototype, "createdAt", void 0);
exports.Task = Task = tslib_1.__decorate([
    (0, remult_1.Entity)('tasks', {
        allowApiCrud: remult_1.Allow.authenticated,
        allowApiInsert: 'admin',
        allowApiDelete: 'admin',
    })
], Task);
//# sourceMappingURL=Task.js.map