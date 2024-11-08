/*---- Ajout Gasp Plugins---*/

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    ScrollTrigger,
    MotionPathPlugin
    /*DrawSVGPlugin,
    MorphSVGPlugin*/
  );
});

// Scrolling Body
let chapScroll;
const body = document.querySelector("body");

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  window.clearTimeout(chapScroll);

  chapScroll = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 100);
});


/*-- ---------- CHAP 1-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre1`,
    },
  })
  /* ---- Animation chapitre 1 ----- */
  .fromTo(
    `#constellation`,
    { y: `100vh`, opacity: 0, duration: 1 },
    { y: 0, opacity: 1, duration: 10 }
  )

  .fromTo(`#lune`, { y: `-200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(`#lit-cadre`, { y: `-200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(
    `#lit-couverture`,
    { y: `-200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    `#polaris-dort-debut`,
    { y: `-200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )

  .fromTo(
    "#chapitre1 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 2-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre2",
      pin: true,
      markers: false,
      toggleActions: "play complete reverse reset",
    },
  })

  /* ---- Animation chapitre 2 ----- */

  .fromTo(
    `.lit-chapitre-deux`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 1 }
  )
  .fromTo(
    `.polaris-lit-assis`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 1 }
  )
  .fromTo(
    `#chapitre2 .etoile`,
    { scale: 0, duration: 1 },
    { scale: 1, duration: 2 }
  )
  .fromTo(
    "#chapitre2 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 3-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre3`,
    },
  })

  /* ---- Animation chapitre 3 ----- */

  .fromTo(
    `.lit-chapitre-trois`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `.debout-polaris`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    "#chapitre3 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

gsap.to(".etoile-avancement", {
  motionPath: {
    align: ".trace",
    path: ".trace",
  },
  duration: 10,
  repeat: -1,
  yoyo: true,
  ease: "power1",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre3",
    },
  })
  .fromTo(
    ".debout-polaris",
    {
      y: "0vh",
    },
    {
      y: "-5vh",
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 3,
    }
  );

/*-- ---------- CHAP 4-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre4`,
    },
  })
  /* ---- Animation chapitre 4 ----- */

  .fromTo(`#nuage`, { y: `-500vh`, duration: 1 }, { x: 0, duration: 1 })
  .fromTo(`#nuage01`, { y: `-400vh`, duration: 1 }, { x: 0, duration: 1 })
  .fromTo(`#nuage02`, { y: `-400vh`, duration: 1 }, { x: 0, duration: 1 })
  .fromTo(
    "#polaris-tomber",
    { y: "-210vh", rotation: 0, duration: 1 },
    { y: 0, rotation: 360, duration: 20 }
  )

  .fromTo(
    "#chapitre4 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

gsap.to("#chapitre4", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to("#nuage", {
  y: 0.25 * 100,
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to("#nuage01", {
  y: 0.45 * 100,
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

gsap.to("#nuage02", {
  y: 0.65 * 100,
  ease: "none",
  scrollTrigger: {
    trigger: "#chapitre4",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false,
  },
});

/*-- ---------- CHAP 5-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre5`,
    },
  })

  /* ---- Animation chapitre 5 ----- */

  .fromTo(
    "#chapitre5 .sprite2",
    { opacity: 0, duration: 3 },
    { opacity: 1, duration: 3 }
  )

  .fromTo(".sprite1", { x: "50vw", duration: 1 }, { x: "-10vw", duration: 10 })
  .fromTo(
    "#chapitre5 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*-- ---------- CHAP 6-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre6`,
    },
  })

  /* ---- Animation chapitre 6 ----- */

  .fromTo(
    "#chapitre6 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".polaris-peur",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(1)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(2)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  )
  .fromTo(
    `#chapitre6 .mot-encouragant p:nth-child(3)`,
    { opacity: 0, duration: 4 },
    { opacity: 1, duration: 4 }
  )
  .fromTo(
    `#chapitre6 .sprite2`,
    { scale: 1, duration: 1 },
    { scale: 0, duration: 10 }
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#chapitre6",
    },
  })
  .fromTo(
    "#etoile-peur",
    {
      y: "10vh",
    },
    {
      y: "15vh",
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 1,
    }
  );

/*-- ---------- CHAP 7-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre7`,
    },
  })

  /* ---- Animation chapitre 7 ----- */

  .fromTo(
    "#chapitre7 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    ".polaris-joie",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  )
  .fromTo(
    `#chapitre7 .etoile-ours`,
    { scale: 0.5, duration: 1 },
    { scale: 0, duration: 2 }
  )
  .fromTo(
    `#chapitre7 .petit-ours-coeur`,
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*let anim = gsap.to("#etoile", {
  morphSVG: "#coeur",
  duration: 5,
  repeat: -1,
  yoyo: true,
});*/

/*-- ---------- CHAP 8-------------------- --*/
gsap
  .timeline({
    scrollTrigger: {
      pin: true,
      scrub: true,
      markers: false,
      trigger: `#chapitre8`,
    },
  })

  /* ---- Animation chapitre 8 ----- */

  .fromTo(`#lit-cadre-fin`, { y: `200vh`, duration: 1 }, { y: 0, duration: 2 })
  .fromTo(
    `#lit-couverture-fin`,
    { y: `200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    `#constellation-fin`,
    { opacity: 0, duration: 1 },
    { opacity: 1, duration: 10 }
  )
  .fromTo(
    `#polaris-dort-fin`,
    { y: `200vh`, duration: 1 },
    { y: 0, duration: 2 }
  )
  .fromTo(
    "#chapitre8 .text-chapitre",
    { opacity: 0, duration: 2 },
    { opacity: 1, duration: 2 }
  );

/*.fromTo(
    ".path-z1",
    {
      drawSVG: "0% 0%",
      strokeWidth: "10px",
    },
    {
      drawSVG: "0% 100%",
      duration: 3,
      strokeWidth: "50px",
    }
  )
  .fromTo(
    ".path-z2",
    {
      drawSVG: "0% 0%",
      strokeWidth: "10px",
    },
    {
      drawSVG: "0% 100%",
      duration: 4,
      strokeWidth: "40px",
    }
  )
  .fromTo(
    ".path-z3",
    {
      drawSVG: "0% 0%",
      strokeWidth: "10px",
    },
    {
      drawSVG: "0% 100%",
      duration: 5,
      strokeWidth: "30px",
    }
  );*/
