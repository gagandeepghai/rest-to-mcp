import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TeamService } from "./team-service.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod';
const server = new McpServer({
    name: "team",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {}
    }
});
const team_service = new TeamService();
server.tool("get_all_team_members", "Get all team members info", {}, async () => {
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(team_service.getAllTeamMembers())
            }
        ]
    };
});
server.tool("get_team_member_details", "Get team member information by name", {
    name: z.string().describe("First name of the team member"),
}, async ({ name }) => {
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(team_service.getTeamMemberByName(name)),
            }
        ]
    };
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Team Server running");
}
main().catch((error) => {
    console.error("Failed to launch");
    process.exit(1);
});
