import type { SwitchProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["NO"],
  pin2: ["COM"],
  pin3: ["NC"],
  pin4: ["pin4"],
  pin5: ["pin5"],
} as const;

export const EG1213 = (props: SwitchProps) => {
  const { name = "SW1", ...restProps } = props;

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{
        jlcpcb: ["C273393"],
      }}
      manufacturerPartNumber="EG1213"
      footprint={
        <footprint>
          <platedhole
            portHints={["pin2"]}
            pcbX="-0.000127mm"
            pcbY="0mm"
            outerDiameter="1.499997mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="4.850003mm"
            pcbY="0mm"
            outerDiameter="2.54mm"
            holeDiameter="1.700022mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="-4.850003mm"
            pcbY="0mm"
            outerDiameter="2.54mm"
            holeDiameter="1.700022mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin1"]}
            pcbX="-2.000123mm"
            pcbY="0mm"
            outerDiameter="1.499997mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.999869mm"
            pcbY="0mm"
            outerDiameter="1.499997mm"
            holeDiameter="0.999998mm"
            shape="circle"
          />
          <silkscreenpath
            route={[
              { x: -5.0039270000000045, y: 1.9050000000000011 },
              { x: -0.7113270000000114, y: 1.9050000000000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7113270000000114, y: 1.9050000000000011 },
              { x: 0.711072999999999, y: 1.9050000000000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.711072999999999, y: 1.9050000000000011 },
              { x: 5.003672999999992, y: 1.9050000000000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.003672999999992, y: -1.904999999999987 },
              { x: 2.1080729999999903, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.1080729999999903, y: -1.904999999999987 },
              { x: 0.9904729999999802, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9904729999999802, y: -1.904999999999987 },
              { x: -0.9907270000000068, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9907270000000068, y: -1.904999999999987 },
              { x: -2.108327000000017, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.108327000000017, y: -1.904999999999987 },
              { x: -5.0039270000000045, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7113270000000114, y: 1.9050000000000011 },
              { x: -0.7113270000000114, y: 1.1938000000000102 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.7113270000000114, y: 1.1938000000000102 },
              { x: 0.711072999999999, y: 1.1938000000000102 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.711072999999999, y: 1.1938000000000102 },
              { x: 0.711072999999999, y: 1.9050000000000011 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.108327000000017, y: -1.904999999999987 },
              { x: -2.108327000000017, y: -1.600200000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.108327000000017, y: -1.600200000000001 },
              { x: 2.1080729999999903, y: -1.600200000000001 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 2.1080729999999903, y: -1.600200000000001 },
              { x: 2.1080729999999903, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9907270000000068, y: -1.904999999999987 },
              { x: -0.9907270000000068, y: -7.01039999999999 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -0.9907270000000068, y: -7.01039999999999 },
              { x: 0.9904729999999802, y: -7.01039999999999 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 0.9904729999999802, y: -7.01039999999999 },
              { x: 0.9904729999999802, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.003672999999992, y: 1.9050000000000011 },
              { x: 5.003672999999992, y: 1.4932152000000087 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 5.003672999999992, y: -1.4932151999999945 },
              { x: 5.003672999999992, y: -1.904999999999987 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.0039270000000045, y: -1.904999999999987 },
              { x: -5.0039270000000045, y: -1.4932151999999945 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -5.0039270000000045, y: 1.4932152000000087 },
              { x: -5.0039270000000045, y: 1.9050000000000011 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.000127mm"
            pcbY="3.032mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -6.473127000000019, y: 2.2820000000000107 },
              { x: 6.472872999999979, y: 2.2820000000000107 },
              { x: 6.472872999999979, y: -7.3873999999999995 },
              { x: -6.473127000000019, y: -7.3873999999999995 },
              { x: -6.473127000000019, y: 2.2820000000000107 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C273393.obj?uuid=23e25baa34c84a8da4ed7aa9db093664",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C273393.step?uuid=23e25baa34c84a8da4ed7aa9db093664",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0,
          y: -0.000005000000001587068,
          z: 0.09999300000000044,
        },
      }}
      {...restProps}
    />
  );
};
