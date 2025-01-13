import { ref } from "vue";
import {
  Engine,
  Render,
  Runner,
  Composite,
  MouseConstraint,
  Mouse,
  Composites,
  Bodies,
  Body,
  Vector,
  Events,
} from "matter-js";

export const use404Game = () => {
  const container = ref();
  const width = ref(0);
  const height = ref(0);

  const init = () => {
    const engine = Engine.create();
    const world = engine.world;
    engine.gravity.y = 0.8;

    const render = Render.create({
      element: container.value,
      engine: engine,
      options: {
        width: width.value,
        height: height.value,
        showAngleIndicator: true,
        background: "transparent",
        wireframes: false,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const stack = Composites.stack(
      0,
      0,
      Math.ceil(width.value / 40), // Number of columns
      10, // Number of rows
      20,
      0,
      function (x, y) {
        return Bodies.circle(x, y, 20, {
          restitution: 0.1, // Add some bounce
        });
      }
    );

    Composite.add(world, [
      // Ceiling
      Bodies.rectangle(0, 0, width.value * 3, 1, { isStatic: true }),
      // Floor
      Bodies.rectangle(0, height.value, width.value * 3, 1, { isStatic: true }),
      // Left wall
      Bodies.rectangle(0, 0, 1, height.value * 3, { isStatic: true }),
      // Right wall
      Bodies.rectangle(width.value - 1, 0, 1, height.value * 3, {
        isStatic: true,
      }),
      stack,
    ]);

    // const cursorBody = Bodies.circle(0, 0, 30, {
    //   isStatic: false, // Permet de détecter les collisions
    //   isSensor: false, // Ne pas influencer la physique des autres corps
    //   render: {
    //     visible: false,
    //   },
    // });

    // Composite.add(world, cursorBody);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // Associer les événements de souris
    // Events.on(engine, "beforeUpdate", () => {
    //   if (mouse.position.x && mouse.position.y) {
    //     const cursorBodyVector = Vector.create(
    //       mouse.position.x,
    //       mouse.position.y
    //     );
    //     Body.setPosition(cursorBody, cursorBodyVector);
    //   }
    // });

    // Détecter les collisions et créer une explosion
    // Events.on(engine, "collisionStart", (event) => {
    //   const pairs = event.pairs;

    //   if (pairs.length === 0) {
    //     console.log("Aucune collision détectée.");
    //     return;
    //   }

    //   pairs.forEach(({ bodyA, bodyB }) => {
    //     // Vérifier si l'un des corps impliqués est cursorBody
    //     if (bodyA === cursorBody || bodyB === cursorBody) {
    //       const targetBody = bodyA === cursorBody ? bodyB : bodyA;

    //       // Calculer la direction du "cercle cible" à partir de cursorBody
    //       const direction = Vector.sub(targetBody.position, cursorBody.position);
    //       Vector.normalise(direction, direction); // Normaliser pour avoir une direction unitaire

    //       // Appliquer une force plus forte sur le corps touché (explosion)
    //       const forceMagnitude = 0.05; // Ajuste la magnitude de la force d'explosion
    //       const explosionForce = Vector.mult(direction, forceMagnitude);

    //       Body.applyForce(targetBody, targetBody.position, explosionForce);

    //       console.log("Explosion ! Force appliquée sur le corps cible !");
    //     }
    //   });
    // });

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width.value, y: height.value },
    });
  };

  return { container, width, height, init };
};
