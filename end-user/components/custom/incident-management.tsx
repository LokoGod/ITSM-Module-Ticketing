import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function IncidentManagement() {
  const myTicketDetails = [
    {
      id: 1,
      ticketNumber: "#27001",
      ticketStatus: "Open",
      ticketTitle: "Email not syncing.",
      originDate: "2025/04/22",
      endDate: "2025/04/24",
    },
    {
      id: 2,
      ticketNumber: "#27002",
      ticketStatus: "Pending",
      ticketTitle: "Active Directory Credential Issue.",
      originDate: "2025/04/27",
      endDate: "2025/04/27",
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
      case "Closed":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  }

  return (
    <div>
      <Tabs defaultValue="myTickets" className="mt-10">
        <div className="flex justify-center">
          <TabsList className="w-[400px]">
            <TabsTrigger value="myTickets">My Tickets</TabsTrigger>
            <TabsTrigger value="reportIncident">Report Incident</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="myTickets">
          <h2 className="mt-5 text-2xl font-bold">Active Tickets</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {myTicketDetails.map((ticket) => (
              <Card key={ticket.id} className="text-center">
                <CardHeader>
                  <CardTitle>{ticket.ticketNumber}</CardTitle>
                  <CardDescription>
                    <Badge
                      variant="outline"
                      className={getStatusColor(ticket.ticketStatus)}
                    >
                      {ticket.ticketStatus}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{ticket.ticketTitle}</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{ticket.originDate}</span>
                  </div>
                  <div className="w-full h-1 bg-muted rounded-full">
                    <div className="h-1 bg-green-500 rounded-full w-[50%]" />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reportIncident">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
