import IncidentManagement from "@/components/custom/incident-management";

export default function Home() {
  return (
    <div className="m-10">
      <div className="text-center text-6xl">
        <h1>Hello, Good morning Evan!</h1>
      </div>

      <div>
        <IncidentManagement />
      </div>
    </div>
  );
}
