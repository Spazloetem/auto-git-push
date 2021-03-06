"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitpushController = void 0;
const common_1 = require("@nestjs/common");
const gitpush_service_1 = require("./gitpush.service");
let GitpushController = class GitpushController {
    constructor(gitpushServiceImpl) {
        this.gitpushServiceImpl = gitpushServiceImpl;
    }
    async createUser(headers) {
        if (headers['x-github-event'] == 'push' &&
            headers['x-github-hook-id'] == '332071966' &&
            headers['x-github-hook-installation-target-id'] == '427273910') {
            await this.gitpushServiceImpl.action();
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GitpushController.prototype, "createUser", null);
GitpushController = __decorate([
    (0, common_1.Controller)('gitpush'),
    __param(0, (0, common_1.Inject)(gitpush_service_1.GITPUSH_SERVICE)),
    __metadata("design:paramtypes", [gitpush_service_1.GitpushServiceImpl])
], GitpushController);
exports.GitpushController = GitpushController;
//# sourceMappingURL=gitpush.controller.js.map