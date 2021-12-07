"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitpushServiceImpl = exports.GITPUSH_SERVICE = void 0;
const common_1 = require("@nestjs/common");
exports.GITPUSH_SERVICE = Symbol('GITPUSH_SERVICE');
let GitpushServiceImpl = class GitpushServiceImpl {
    async action(body) {
        if (body['hook_id'] != undefined) {
            const exec = require('child_process').exec;
            var script = exec('sh test.sh', (error, stdout, stderr) => {
                console.log(`${stdout}`);
                if (error !== null) {
                    console.log(`exec error: ${error}`);
                }
            });
        }
    }
};
GitpushServiceImpl = __decorate([
    (0, common_1.Injectable)()
], GitpushServiceImpl);
exports.GitpushServiceImpl = GitpushServiceImpl;
//# sourceMappingURL=gitpush.service.js.map