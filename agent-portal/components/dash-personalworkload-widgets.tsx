import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { TrendingUp } from "lucide-react";
import { DashPersonalloadWidgetsRadialChart } from "./charts/dash-personal-widget-charts-radial";
import { DashPersonalloadWidgetsPieChart } from "./charts/dash-personal-widget-charts-pie";
import { DashPersonalloadWidgetsLineChart } from "./charts/dash-personal-widget-charts-line";

export default function DashPersonalloadWidgets() {
    return (

        <div className="grid grid-cols-4 gap-4">

            <DashPersonalloadWidgetsRadialChart />
            <DashPersonalloadWidgetsPieChart />
            <DashPersonalloadWidgetsLineChart />
            <DashPersonalloadWidgetsRadialChart />





        </div>
    );
}