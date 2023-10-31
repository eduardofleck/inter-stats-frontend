import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PlannedTable(props) {
  const { t, i18n } = useTranslation();

  let bigClubs = [];
  let mediumClubs = [];
  let smallClubs = [];

  props.teams.forEach((team) => {
    if (team.size === "X") bigClubs.push(team.name);
    if (team.size === "M") mediumClubs.push(team.name);
    if (team.size === "S") smallClubs.push(team.name);
  });

  return (
    <div style={{ display: "grid", rowGap: "20px" }}>
      <div>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "* 200px",
            margin: "15px",
          }}
        >
          <Typography variant="h6" id="tableTitle" component="div">
            {t("plannedTable.name")}
          </Typography>
          <Typography variant="caption" component="div" align="right">
            {t("plannedTable.tableUpdated", { round: props.lastRound })}
          </Typography>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label={t("plannedTable.name")}>
            <TableHead>
              <TableRow>
                <TableCell>{t("generic.team")}</TableCell>
                <TableCell align="right">{t("generic.points")}</TableCell>
                <TableCell align="right">{t("generic.planned")}</TableCell>
                <TableCell align="right">{t("generic.planned")} %</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => (
                <TableRow
                  key={row.teamId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.team}
                  </TableCell>
                  <TableCell align="right">{row.points}</TableCell>
                  <TableCell align="right">{row.pointsPlanned}</TableCell>
                  <TableCell align="right">
                    {row.percentagePlanned.toFixed(2)} %
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{t("plannedTable.whatIsTitle")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t("plannedTable.whatIsDescription")}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              {t("plannedTable.howTeamsWereDividedTitle")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {t("plannedTable.bigClubs")}: {bigClubs.join(", ")}
              <br />
              {t("plannedTable.mediumClubs")}: {mediumClubs.join(", ")}
              <br />
              {t("plannedTable.smallClubs")}: {smallClubs.join(", ")}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
