import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Typography } from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export default function App() {
  return (
    <Container>
      <div className="flex-container">
        <div className="flex-item">
          <div className="nested-flex-item">
            <AttachMoneyIcon style={{ fontSize: 40, marginRight: "30px" }} />
            <Typography>Amzn</Typography>
          </div>
          <div className="nested-flex-item">
            <RequestQuoteIcon style={{ fontSize: 40, marginRight: "30px" }} />
            <Typography>200</Typography>
          </div>
          <div className="nested-flex-item">
            <ShowChartIcon style={{ fontSize: 40, marginRight: "30px" }} />
            <Typography>Amzn</Typography>
          </div>
          <div className="nested-flex-item">
            <MoneyIcon style={{ fontSize: 40, marginRight: "30px" }} />
            <Typography>low risk</Typography>
          </div>
        </div>
      </div>
    </Container>
  );
}
