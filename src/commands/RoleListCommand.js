import BotCommand from './BotCommand';
import { asyncRoleFilter } from "../helpers";


export default class RoleListCommand extends BotCommand {

    #messages = {};

    get name() {
        return 'roles';
    }

    get description() {
        return "Lista de roles disponibles";
    }

    get alwaysEnabled() {
        return true;
    }

    onLoad() {
        this.#messages = this.getResponseMessages('RoleListCommand');
    }

    async run(message, args) {
        let roles = message.guild.roles.cache.array();

        await message.channel.send({
            embed: {
                color: 16777215,
                fields: [
                    {
                        name: this.#messages['success'],
                        value: (await asyncRoleFilter(roles, message.guild.id)).join('\n')
                    }
                ]
            }
        });
    }

}