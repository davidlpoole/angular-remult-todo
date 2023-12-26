"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const tslib_1 = require("tslib");
const remult_1 = require("remult");
const Task_1 = require("./Task");
class TasksController {
    static async setAllCompleted(completed) {
        const taskRepo = remult_1.remult.repo(Task_1.Task);
        for (const task of await taskRepo.find()) {
            await taskRepo.save({ ...task, completed });
        }
    }
}
exports.TasksController = TasksController;
tslib_1.__decorate([
    (0, remult_1.BackendMethod)({ allowed: remult_1.Allow.authenticated })
], TasksController, "setAllCompleted", null);
//# sourceMappingURL=TasksController.js.map