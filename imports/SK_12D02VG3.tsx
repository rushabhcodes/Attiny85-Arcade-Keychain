import type { SwitchProps } from "@tscircuit/props";

const pinLabels = {
  pin1: ["NO"],
  pin2: ["COM"],
  pin3: ["NC"],
  pin4: ["mount1"],
  pin5: ["mount2"],
} as const;

export const SK_12D02VG3 = (props: SwitchProps) => {
  const { name = "S1", ...restProps } = props;

  return (
    <switch
      name={name}
      pinLabels={pinLabels}
      supplierPartNumbers={{ jlcpcb: ["C131374"] }}
      manufacturerPartNumber="SK-12D02VG3"
      footprint={
        <footprint>
          {/* Keep 0.25 mm of copper around each plated slot. */}
          <platedhole
            portHints={["pin1"]}
            pcbX="-1.998599mm"
            pcbY="0mm"
            holeWidth="0.700024mm"
            holeHeight="0.899922mm"
            outerWidth="1.200024mm"
            outerHeight="1.399922mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin2"]}
            pcbX="0.000381mm"
            pcbY="0mm"
            holeWidth="0.700024mm"
            holeHeight="0.899922mm"
            outerWidth="1.200024mm"
            outerHeight="1.399922mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin3"]}
            pcbX="1.998853mm"
            pcbY="0mm"
            holeWidth="0.700024mm"
            holeHeight="0.899922mm"
            outerWidth="1.200024mm"
            outerHeight="1.399922mm"
            pcbRotation="90deg"
            shape="pill"
          />
          <platedhole
            portHints={["pin4"]}
            pcbX="4.099433mm"
            pcbY="0mm"
            holeWidth="0.700024mm"
            holeHeight="1.5000224mm"
            outerWidth="1.200024mm"
            outerHeight="2.0000224mm"
            shape="pill"
          />
          <platedhole
            portHints={["pin5"]}
            pcbX="-4.099433mm"
            pcbY="0mm"
            holeWidth="0.700024mm"
            holeHeight="1.5000224mm"
            outerWidth="1.200024mm"
            outerHeight="2.0000224mm"
            shape="pill"
          />
          <silkscreenpath
            route={[
              { x: -2.031619, y: -5.2500022 },
              { x: 0.000381, y: -5.2500022 },
              { x: 0.000381, y: -2.286 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -2.031619, y: -2.286 },
              { x: -2.031619, y: -5.2500022 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.299585, y: 2.199894 },
              { x: 4.300347, y: 2.199894 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.299585, y: -2.199894 },
              { x: 4.300347, y: -2.199894 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.300347, y: 2.199894 },
              { x: 4.300347, y: 1.1030458 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: 4.300347, y: -1.1030458 },
              { x: 4.300347, y: -2.199894 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.299585, y: 2.199894 },
              { x: -4.299585, y: 1.1030458 },
            ]}
          />
          <silkscreenpath
            route={[
              { x: -4.299585, y: -1.1030458 },
              { x: -4.299585, y: -2.199894 },
            ]}
          />
          <silkscreentext
            text="{NAME}"
            pcbX="-0.025019mm"
            pcbY="3.3114mm"
            anchorAlignment="center"
            fontSize="1mm"
          />
          <courtyardoutline
            outline={[
              { x: -4.669219, y: 2.5614 },
              { x: 4.619181, y: 2.5614 },
              { x: 4.619181, y: -5.5078 },
              { x: -4.669219, y: -5.5078 },
              { x: -4.669219, y: 2.5614 },
            ]}
          />
        </footprint>
      }
      cadModel={{
        objUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131374.obj?uuid=5d97637519c4481c888d11820dbca974",
        stepUrl:
          "https://modelcdn.tscircuit.com/easyeda_models/assets/C131374.step?uuid=5d97637519c4481c888d11820dbca974",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: 0.00005,
          y: -0.0099979,
          z: -0.0000056,
        },
      }}
      {...restProps}
    />
  );
};
