import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyTickets() {
  const myTicketDetails = [
    {
      id: 1,
      ticketNumber: "#27001",
      ticketProgress: "Open",
      ticketTitle: "Email not syncing.",
      originDate: "2025-04-22",
      endDate: "2025-04-24",
      isActive: true,
    },
    {
      id: 2,
      ticketNumber: "#27002",
      ticketProgress: "Dismissed",
      ticketTitle: "Active Directory Credential Issue.",
      originDate: "2025-04-27",
      endDate: "2025-04-27",
      isActive: false,
    },
    {
      id: 3,
      ticketNumber: "#27003",
      ticketProgress: "Resolved",
      ticketTitle: "WiFi authentication failure.",
      originDate: "2025-04-27",
      endDate: "2025-04-27",
      isActive: false,
    },
  ];

  function getStatusColor(status: string) {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-300";
      case "Dismissed":
        return "bg-red-100 text-gray-800 border-gray-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  }

  const activeTickets = myTicketDetails.filter((ticket) => ticket.isActive);
  const closedTickets = myTicketDetails.filter((ticket) => !ticket.isActive);

  return (
    <div>
      <div>
        <h2 className="mt-5 text-2xl font-bold">Active Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {activeTickets.map((ticket) => (
            <Card key={ticket.id} className="text-center">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {ticket.ticketNumber}
                  <Badge
                    variant="outline"
                    className={getStatusColor(ticket.ticketProgress)}
                  >
                    {ticket.ticketProgress}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{ticket.ticketTitle}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-1 text-xs text-muted-foreground">
                <span>{ticket.originDate}</span>
              </CardFooter>
            </Card>
          ))}
        </div>

        <h2 className="mt-10 text-2xl font-bold">Closed Tickets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {closedTickets.map((ticket) => (
            <Card key={ticket.id} className="text-center">
              <CardHeader>
                <CardTitle className="flex justify-between">
                  {ticket.ticketNumber}
                  <Badge
                    variant="outline"
                    className={getStatusColor(ticket.ticketProgress)}
                  >
                    {ticket.ticketProgress}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{ticket.ticketTitle}</p>
              </CardContent>
              <CardFooter className="flex flex-col gap-1 text-xs text-muted-foreground">
                <span>{ticket.originDate}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
