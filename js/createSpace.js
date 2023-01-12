let space;
function createSpace(orbitContainer, index) {
  if (!orbitContainer.innerHTML) {
    space = new Spacekit.Simulation(orbitContainer, {
      basePath: "https://typpo.github.io/spacekit/src",
      jdPerSecond: 0.5,
      camera: {
        enableDrift: false,
        initialPosition: [0.04, 0.16, 1.0],
      },
    });
    space.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);
    space.createObject("sun", Spacekit.SpaceObjectPresets.SUN);
    space.createLight([0, 0, 0]);
    space.createAmbientLight();
    // 
    const earth = space.createSphere(`earth${index}`, {
      textureUrl: "./assets/space/earthtexture.jpg",
      radius: 0.005,
      ephem: Spacekit.EphemPresets.EARTH,
      levelsOfDetail: [
        {
          radii: 0,
          segments: 64,
        },
        {
          radii: 30,
          segments: 16,
        },
        {
          radii: 60,
          segments: 8,
        },
      ],
      atmosphere: {
        enable: true,
        color: 0xc7c1a8,
      },
      rotation: {
        enable: true,
        lambdaDeg: 50,
        betaDeg: -63,
        period: 3.755067,
        yorp: 1.9e-8,
        phi0: 0,
        jd0: 2443568.0,
        speed: 0.5,
      },
    });
  }
}
