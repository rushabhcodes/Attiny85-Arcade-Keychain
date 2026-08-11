import type { ChipProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["GND"],
  pin5: ["pin5"],
  pin6: ["pin6"],
  pin7: ["pin7"],
  pin8: ["VCC"],
} as const;

export const ATTINY85_20PU = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C965497"],
      }}
      manufacturerPartNumber="ATTINY85_20PU"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin1"]}
            pcbX="-3.81mm"
            pcbY="-3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin8"]}
            pcbX="-3.81mm"
            pcbY="3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="-1.27mm"
            pcbY="-3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin7"]}
            pcbX="-1.27mm"
            pcbY="3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.27mm"
            pcbY="-3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin6"]}
            pcbX="1.27mm"
            pcbY="3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="3.81mm"
            pcbY="-3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="3.81mm"
            pcbY="3.949954mm"
            holeWidth="0.9000236mm"
            holeHeight="1.3760196mm"
            outerWidth="1.524mm"
            outerHeight="1.999996mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -4.726178000000004, y: -0.7999984000000211 },
              { x: -4.726178000000004, y: -2.721406800000011 },
              { x: 4.726203400000003, y: -2.721406800000011 },
              { x: 4.726203400000003, y: 2.7213813999999843 },
              { x: -4.726178000000004, y: 2.7213813999999843 },
              { x: -4.726178000000004, y: 0.7999983999999927 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.726190699999989, y: -0.7999984000000211 },
              { x: -4.726190699999989, y: 0.7999983999999927 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.102351999999996, y: -3.8023799999999994 },
              { x: -5.107467010512437, y: -3.841232362136523 },
              { x: -5.122463462536288, y: -3.8774370000000147 },
              { x: -5.146319372648961, y: -3.9085266273510513 },
              { x: -5.177408999999983, y: -3.932382537463724 },
              { x: -5.213613637863489, y: -3.947378989487561 },
              { x: -5.252465999999984, y: -3.9524940000000157 },
              { x: -5.291318362136508, y: -3.947378989487561 },
              { x: -5.327522999999999, y: -3.932382537463724 },
              { x: -5.358612627351022, y: -3.9085266273510513 },
              { x: -5.382468537463694, y: -3.8774370000000147 },
              { x: -5.3974649894875455, y: -3.841232362136523 },
              { x: -5.402579999999986, y: -3.8023799999999994 },
              { x: -5.3974649894875455, y: -3.763527637863504 },
              { x: -5.382468537463694, y: -3.7273230000000126 },
              { x: -5.358612627351022, y: -3.696233372648976 },
              { x: -5.327522999999999, y: -3.6723774625363035 },
              { x: -5.291318362136508, y: -3.6573810105124664 },
              { x: -5.252465999999984, y: -3.6522660000000116 },
              { x: -5.213613637863489, y: -3.6573810105124664 },
              { x: -5.177408999999983, y: -3.6723774625363035 },
              { x: -5.146319372648961, y: -3.696233372648976 },
              { x: -5.122463462536288, y: -3.7273230000000126 },
              { x: -5.107467010512437, y: -3.763527637863504 },
              { x: -5.102351999999996, y: -3.8023799999999994 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.3429mm"
            pcbY="5.3942mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -5.660200000000003, y: 4.644199999999998 },
              { x: 4.974400000000003, y: 4.644199999999998 },
              { x: 4.974400000000003, y: -5.177600000000012 },
              { x: -5.660200000000003, y: -5.177600000000012 },
              { x: -5.660200000000003, y: 4.644199999999998 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C965497.obj?uuid=49fc690c136d4479a04219fd9c039749",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C965497.step?uuid=49fc690c136d4479a04219fd9c039749",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -0.000012699999999199463,
          y: 0,
          z: -1.0500059999999998,
        },
      }}
      {...props}
    />
  );
};
