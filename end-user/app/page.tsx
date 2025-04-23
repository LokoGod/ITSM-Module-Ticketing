import IncidentManagement from "@/components/custom/incident-management";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-10 my-5">


      <div className="flex justify-center">
      <Image src={"/fn8wpnle.png"} alt={"logo"} width={100} height={100}/>
      </div>

      <div>
        <IncidentManagement />
      </div>
    </div>
  );
}
