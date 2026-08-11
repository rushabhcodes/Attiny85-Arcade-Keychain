import type { ChipProps } from "tscircuit"

const oledPinLabels = {
  pin1: "GND",
  pin2: "VDD",
  pin3: ["SCK", "SCL"],
  pin4: "SDA",
} as const

export const OledDisplay = (props: ChipProps<typeof oledPinLabels>) => (
  <chip
    {...props}
    pinLabels={oledPinLabels}
    supplierPartNumbers={{
      jlcpcb: ["C5248080"],
    }}
    manufacturerPartNumber="HS96L03W2C03"
    pinAttributes={{ VDD: { requiresPower: true }, GND: { requiresGround: true } }}
    schWidth={1.385}
    schPinArrangement={{
      leftSide: { pins: ["GND", "VDD", "SCK", "SDA"], direction: "top-to-bottom" },
    }}
    footprint={
      <footprint>
        <platedhole portHints={["pin1"]} shape="circle" holeDiameter="1mm" outerDiameter="2mm" pcbX={-3.81} pcbY={0} />
        <platedhole portHints={["pin2"]} shape="circle" holeDiameter="1mm" outerDiameter="2mm" pcbX={-1.27} pcbY={0} />
        <platedhole portHints={["pin3"]} shape="circle" holeDiameter="1mm" outerDiameter="2mm" pcbX={1.27} pcbY={0} />
        <platedhole portHints={["pin4"]} shape="circle" holeDiameter="1mm" outerDiameter="2mm" pcbX={3.81} pcbY={0} />
        <silkscreenpath
          route={[
            { x: -5.2, y: 1.5 },
            { x: 5.2, y: 1.5 },
            { x: 5.2, y: -1.5 },
            { x: -5.2, y: -1.5 },
            { x: -5.2, y: 1.5 },
          ]}
        />
      </footprint>
    }
    cadModel={{
      modelOriginPosition: {
        x: 0,
        y: 12,
        z: 0,
      },
      objUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C5248080.obj?uuid=c6b423183c2f4cf5a163f75f8ad52fae",
      stepUrl:
        "https://modelcdn.tscircuit.com/easyeda_models/assets/C5248080.step?uuid=c6b423183c2f4cf5a163f75f8ad52fae",
      pcbRotationOffset: 0,
    }}
  />
)
