import express, { Request, Response } from 'express';
import { TeamService } from './team-service';
import { TeamMember } from './models';
const app = express();
const port = 3000;
const team_service = new TeamService();

app.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Test' });
});

app.get('/team/members', (req: Request, res: Response) => {
    var team_members: TeamMember [] = team_service.getAllTeamMembers();
    res.json(team_members);
});

app.get('/team/members/:name', (req: Request, res: Response) => {
    var team_member: TeamMember = team_service.getTeamMemberByName(req.params.name);
    res.json(team_member);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;