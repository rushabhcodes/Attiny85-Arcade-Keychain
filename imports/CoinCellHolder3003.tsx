import type { ChipProps } from "tscircuit"
import coinCellHolder3003Step from "../assets/CoinCellHolder3003.step"

const batteryPinLabels = {
  pin1: ["plus", "pos", "VBAT"],
  pin2: ["minus", "neg"],
} as const

export const CoinCellHolder3003 = (props: ChipProps<typeof batteryPinLabels>) => (
  <chip
    {...props}
    pinLabels={batteryPinLabels}
    pinAttributes={{ plus: { providesPower: true }, minus: { providesGround: true } }}
    footprint={
      <footprint>
        <platedhole
          portHints={["pin1"]}
          shape="oval"
          outerWidth="2.775mm"
          outerHeight="3mm"
          holeWidth="1.85mm"
          holeHeight="1.85mm"
          pcbX={-10.555}
          pcbY={0}
        />
        <platedhole
          portHints={["pin1"]}
          shape="oval"
          outerWidth="2.775mm"
          outerHeight="3mm"
          holeWidth="1.85mm"
          holeHeight="1.85mm"
          pcbX={10.555}
          pcbY={0}
        />
        <smtpad portHints={["pin2"]} shape="circle" radius="5mm" pcbX={0} pcbY={0} />
        <silkscreencircle radius={10.2} pcbX={0} pcbY={0} />
      </footprint>
    }
    // Local STEP asset for the Keystone 3003-equivalent 20 mm retainer.
    cadModel={{
      stepUrl: coinCellHolder3003Step,
      // This STEP uses Y as its mounting/thickness axis, not Z.
      modelBoardNormalDirection: "y+",
      zOffsetFromSurface: "0.2mm",
    }}
  />
)
