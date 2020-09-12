import HelloCommand from "./HelloCommand";
import SelectChannelCommand from './SelectChannelCommand';
import SelectRoleCommand from "./SelectRoleCommand";
import HelpCommand from "./HelpCommand";
import RoleListCommand from "./RoleListCommand";
import RemoveRoleCommand from "./RemoveRoleCommand";

/**
 * Bot commands
 *
 * @type {Array<BotCommand>}
 */
const commands = [
    new HelloCommand(),
    new SelectChannelCommand(),
    new SelectRoleCommand(),
    new RoleListCommand(),
    new HelpCommand(),
    new RemoveRoleCommand()
];

/**
 * Get the bot commands instances
 *
 * @return {Array<BotCommand>}
 */
export default function botCommands() {
    return commands;
}