import { Team, TeamMember } from "./models";
import * as fs from 'fs';
import * as path from 'path';

export class TeamService {
    readonly team: Team;

    constructor() {
       const filepath = path.join(__dirname, "../resources/team.json");
       const team_data: string = fs.readFileSync(filepath, 'utf8');
       this.team = JSON.parse(team_data);
    }

    getAllTeamMembers() : TeamMember[] {
        return this.team.team_members;
    }

    getTeamMemberByName(name: String) : TeamMember {
        var team_members: TeamMember[] = this.team.team_members.filter (item => item.name.toLowerCase().includes(name.toLowerCase()));
        if (team_members.length != 1) {
            throw ("Invalid Input: " +name)
        }
        return team_members[0];
    }
}