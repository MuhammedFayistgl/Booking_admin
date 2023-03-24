import { Typography } from "@mui/material";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Geographymap = () => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  return (
    <>
    <Typography sx={{m:2}}>
    Geography Based Traffic
    </Typography>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#06f",
                  },
                  hover: {
                    fill: "#F53",
                  },
                  pressed: {
                    fill: "#E42",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default Geographymap;
