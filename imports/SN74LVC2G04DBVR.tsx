import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["1A"],
  pin2: ["GND"],
  pin3: ["2A"],
  pin4: ["2Y"],
  pin5: ["VCC"],
  pin6: ["1Y"],
} as const;

export const SN74LVC2G04DBVR = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C10428"],
      }}
      manufacturerPartNumber="SN74LVC2G04DBVR"
      footprint="sot_h1.7434mm_pl1.1304mm_pin1location(rightside,bottom)"
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C10428.obj?uuid=229b69761e2c45dba6a83d8866dec72d",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C10428.step?uuid=229b69761e2c45dba6a83d8866dec72d",
        pcbRotationOffset: 180,
        modelOriginPosition: {
          x: 0.000025399999913133797,
          y: -0.0000889000000370288,
          z: -0.048939,
        },
      }}
      {...props}
    />
  );
};
