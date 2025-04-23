import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ReportIncidentForm() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Card className="w-[550px]">
          <CardHeader>
            <CardTitle>Create Ticket</CardTitle>
            <CardDescription>
              Submit a ticket explaining your issue, We will get back to you ASAP. 
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="describeIncident">Describe the incident</Label>
                  <Textarea id="describeIncident" placeholder="Ive had trouble with..." />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Severity</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
