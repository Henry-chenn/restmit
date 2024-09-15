import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TextMessagingComponent from "../messaging";

export default async function StaticTasks() {
  const tasks = await fetchQuery(api.sync.fetchAllUsers);
  // render `tasks`...
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>User</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.users.map((user) => {
            return (
              <TableRow>
                {" "}
                <TableCell key={user.clerkId}>{user.name}</TableCell>{" "}
                <TableCell key={user.points}></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <TextMessagingComponent />
    </div>
  );
}
