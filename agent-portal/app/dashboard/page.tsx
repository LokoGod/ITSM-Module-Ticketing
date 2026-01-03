import { DashTotalIncidentChart } from "@/components/charts/dash-total-incident-chart";
import DashPersonalloadWidgets from "@/components/dash-personalworkload-widgets";
import DashTeamworkloadWidgets from "@/components/dash-teamworkload-widgets";

export default function Page() {
    return (
        <div className="grid gap-4">
            <div>
            <DashTeamworkloadWidgets />
            </div>
            <div>
            <DashPersonalloadWidgets />
            </div>
            <div>
            <DashTotalIncidentChart />
            </div>
        </div>
    );
}
