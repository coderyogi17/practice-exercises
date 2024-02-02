-- Update the toy with the name of "Cheetos" to have a name of "Pooky"
-- Your code here
SELECT matchid, player FROM goal JOIN eteam ON eteam.id = goal.teamid WHERE eteam.id = 'GER';