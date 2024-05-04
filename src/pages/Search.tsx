import React from "react";
import { Card } from "../components/card/Card";
import { CardBody } from "../components/card/Card-body";
import { CardHeader } from "../components/card/Card-header";
import { SearchWrapper } from "../components/search/Wrapper";

export const SearchPage = () => {
  return (
    <div style={{ width: "50%", display: "inline-grid" }}>
      <Card>
        <CardHeader>
          <p>Find informations about everything related to the books</p>
        </CardHeader>
        <CardBody>
          <SearchWrapper />
        </CardBody>
      </Card>
    </div>
  );
};
