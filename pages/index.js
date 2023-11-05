import CardMenuItem from "../src/app/components/CardMenuItem";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ display: "grid", rowGap: "10px" }}>
      <CardMenuItem
        message={t("championships.menu")}
        button={t("championships.name")}
        link="/campeonatos"
      />
      <CardMenuItem
        message={t("plannedTable.menu")}
        button={t("plannedTable.name")}
        link="/planejada"
      />
    </div>
  );
}
