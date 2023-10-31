import Image from "next/image";
import CardMenuItem from "../src/app/components/CardMenuItem";

export default function Home() {
  return (
    <div style={{ display: "grid", rowGap: "10px" }}>
      <CardMenuItem
        message="Tabela planejada do Brasileirão 2023"
        button="Planejada"
        link="/planejada"
      />
    </div>
  );
}
