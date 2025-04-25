import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyTickets from "./my-tickets";
import ReportIncidentForm from "./report-incident-form";

export default function IncidentManagement() {
  return (
    <div>
      <Tabs defaultValue="myTickets" className="mt-10">
        <div className="flex justify-center">
          <TabsList className="w-[400px]">
            <TabsTrigger value="myTickets" className="hover: cursor-pointer">
              My Tickets
            </TabsTrigger>
            <TabsTrigger
              value="reportIncident"
              className="hover: cursor-pointer"
            >
              Report Incident
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="myTickets">
          <MyTickets />
        </TabsContent>

        <TabsContent value="reportIncident">
          <ReportIncidentForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
