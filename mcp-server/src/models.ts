export interface TeamMember {
    name: String;
    level: String;
    job: String;
    profession: String;
    expertise: String[];
    project: String[];
}

export interface Team {
    manager: String;
    team_members: TeamMember[];
}