import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["_POS"],
  pin2: ["_NEG"],
} as const;

export const PKLCS1212E2000_R1 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
       symbol={
        <symbol>
          <schematicpath points={[{ "x": -0.12, "y": 0.12 }, { "x": 0.2, "y": 0.12 }, { "x": 0.2, "y": -0.32 }, { "x": -0.12, "y": -0.32 }, { "x": -0.4, "y": -0.6 }, { "x": -0.4, "y": 0.4 }, { "x": -0.12, "y": 0.12 }]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["_POS"]} direction="right" schX={0.6} schY={-0.2} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["_NEG"]} direction="right" schX={0.6} schY={0} schStemLength={0.4} />
          <schematicpath points={[{ "x": 0.04, "y": -0.2 }, { "x": 0.16, "y": -0.2 }]} strokeColor="#880000" />
          <schematicpath points={[{ "x": 0.1, "y": -0.26 }, { "x": 0.1, "y": -0.14 }]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
        jlcpcb: ["C184513"],
      }}
      manufacturerPartNumber="PKLCS1212E2000_R1"
      footprint="res_p11mm_pw3mm_ph4.5mm"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C184513.obj?uuid=f7607a9699d849ec8f54e5e83abf494f",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C184513.step?uuid=f7607a9699d849ec8f54e5e83abf494f",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000025399999913133797,
          y: -0.00005080000005364127,
          z: 0,
        },
      }}
      {...props}
    />
  );
};
